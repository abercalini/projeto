package br.com.igreja.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.igreja.model.Despesa;
import br.com.igreja.repository.DespesaRepository;

@RestController
@RequestMapping("/despesa")
public class DespesaResource {
	
	
	@Autowired
	private DespesaRepository despesaRepository;
	
	
	@PostMapping
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_OBJETO')")
	public ResponseEntity<Despesa> salvar(@RequestBody Despesa despesa) {
		Despesa despesaSalva = this.despesaRepository.save(despesa);
		return ResponseEntity.status(HttpStatus.CREATED).body(despesaSalva);
	}
	
}
