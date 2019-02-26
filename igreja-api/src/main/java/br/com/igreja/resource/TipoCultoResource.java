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

import br.com.igreja.filter.TipoCultoFilter;
import br.com.igreja.model.TipoCulto;
import br.com.igreja.repository.TipoCultoRepository;

@RestController
@RequestMapping("/tipoculto")
public class TipoCultoResource {
	
	@Autowired
	private TipoCultoRepository tipoCultoRepository;
	
	@PostMapping
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_OBJETO')")
	public ResponseEntity<TipoCulto> salvar(@RequestBody TipoCulto tipoCulto) {
		TipoCulto tipoCultoRetornado = tipoCultoRepository.save(tipoCulto);
		return ResponseEntity.status(HttpStatus.CREATED).body(tipoCultoRetornado);
	}
	
	@GetMapping("/filtrarporigreja/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_OBJETO')")
	public List<TipoCulto> listarTodos(@PathVariable Long codigo, TipoCultoFilter tipoCultoFilter) {
		return tipoCultoRepository.filtrarPorIgreja(codigo, tipoCultoFilter);
	}
	
	
	@PutMapping("/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_EDITAR_OBJETO')")
	public ResponseEntity<TipoCulto> editar(@PathVariable Long codigo, @RequestBody TipoCulto tipoCulto) {
		TipoCulto tipoCultoRetornado = tipoCultoRepository.findOne(codigo);
		BeanUtils.copyProperties(tipoCulto, tipoCultoRetornado, "codigo");
		tipoCultoRepository.save(tipoCultoRetornado);
		return ResponseEntity.status(HttpStatus.OK).body(tipoCultoRetornado);
	}
	
	@GetMapping("/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_OBJETO')")
	public ResponseEntity<TipoCulto> buscarPorCodigo(@PathVariable Long codigo) {
		TipoCulto cultoRetornado = tipoCultoRepository.findOne(codigo);
		return cultoRetornado != null ? ResponseEntity.status(HttpStatus.OK).body(cultoRetornado) : ResponseEntity.status(HttpStatus.NO_CONTENT).build();
	}
	
	@DeleteMapping("/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_EXCLUIR_OBJETO')")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void excluir(@PathVariable Long codigo) {
		tipoCultoRepository.delete(codigo);
	}


}
