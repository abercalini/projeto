package br.com.igreja.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
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
	
	@GetMapping("/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_OBJETO')")
	@ResponseStatus(HttpStatus.OK)
	public List<CentroCusto> listarTodos(@PathVariable Long codigo, CentroCustoFilter centroCustoFilter) {
		System.out.println(centroCustoFilter.getPesquisa());
		return centroCustoRepository.filtrarPorIgreja(codigo, centroCustoFilter);
	}
	
	
}
