package br.com.igreja.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.igreja.model.Dizimo;
import br.com.igreja.repository.DizimoRepository;

@RestController
@RequestMapping("/dizimo")
public class DizimoResource {

	@Autowired
	private DizimoRepository dizimoRepository;
	
	@PostMapping
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_OBJETO')")
	public ResponseEntity<Dizimo> salvar(@RequestBody Dizimo dizimo) {
		Dizimo dizimoRetornado = dizimoRepository.save(dizimo);
		return ResponseEntity.status(HttpStatus.CREATED).body(dizimoRetornado); 
	}
	
	@GetMapping("/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_OBJETO')")
	public List<Dizimo> listarTodos() {
		return dizimoRepository.findAll();
	}
}
