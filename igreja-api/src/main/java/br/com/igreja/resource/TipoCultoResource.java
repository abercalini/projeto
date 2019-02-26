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

}
