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

import br.com.igreja.model.Oferta;
import br.com.igreja.repository.OfertaRepository;

@RestController
@RequestMapping("/oferta")
public class OfertaResource {
	
	@Autowired
	private OfertaRepository ofertaRepository;
	
	@PostMapping
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_OBJETO')")
	public ResponseEntity<Oferta> salvar(@RequestBody Oferta oferta) {
		Oferta ofertaSalva = ofertaRepository.save(oferta);
		return ResponseEntity.status(HttpStatus.CREATED).body(ofertaSalva);
	}
	
	@GetMapping("/filtrarporigreja/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_OBJETO')")
	@ResponseStatus(HttpStatus.OK)
	public List<Oferta> listarTodos(@PathVariable Long codigo) {
		return ofertaRepository.filtrarPorIgreja(codigo);
	}
}
