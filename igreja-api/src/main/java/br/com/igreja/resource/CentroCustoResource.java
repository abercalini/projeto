package br.com.igreja.resource;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.igreja.filter.CentroCustoFilter;
import br.com.igreja.model.CentroCusto;
import br.com.igreja.repository.CentroCustoRepository;

@RestController
@RequestMapping("/centrocusto")
public class CentroCustoResource {
	
	@Autowired
	private CentroCustoRepository centroCustoRepository;
	
	@PostMapping
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_OBJETO')")
	public ResponseEntity<CentroCusto> salvar(@RequestBody CentroCusto centroCusto) {
		CentroCusto centroCustoRetornado = centroCustoRepository.save(centroCusto);
		return ResponseEntity.status(HttpStatus.CREATED).body(centroCustoRetornado);
	}
	
	@GetMapping("/filtrarporigreja/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_OBJETO')")
	@ResponseStatus(HttpStatus.OK)
	public List<CentroCusto> listarTodos(@PathVariable Long codigo, CentroCustoFilter centroCustoFilter) {
		return centroCustoRepository.filtrarPorIgreja(codigo, centroCustoFilter);
	}
	
	@DeleteMapping("/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_EXCLUIR_OBJETO')")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void excluir(@PathVariable Long codigo) {
		centroCustoRepository.delete(codigo);
	}
	
	@GetMapping("/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_OBJETO')")
	public ResponseEntity<CentroCusto> buscarPorCodigo(@PathVariable Long codigo) {
		CentroCusto centroCustoRetornado = centroCustoRepository.findOne(codigo);
		return centroCustoRetornado != null ? ResponseEntity.status(HttpStatus.OK).body(centroCustoRetornado) : ResponseEntity.status(HttpStatus.NO_CONTENT).build();
	}
	
	@PutMapping("/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_EDITAR_OBJETO')")
	public ResponseEntity<CentroCusto> atualizar(@PathVariable Long codigo, @RequestBody CentroCusto centroCusto) {
		CentroCusto centroCustoRetornado = centroCustoRepository.findOne(codigo);
		BeanUtils.copyProperties(centroCusto, centroCustoRetornado, "codigo");
		centroCustoRepository.save(centroCustoRetornado);
		return ResponseEntity.status(HttpStatus.OK).body(centroCustoRetornado);
	}
	
	
}
