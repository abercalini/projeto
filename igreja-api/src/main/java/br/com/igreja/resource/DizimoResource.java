package br.com.igreja.resource;

import java.math.BigDecimal;
import java.util.List;

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
	public List<Dizimo> listarTodos(@PathVariable Long codigo) {
		return dizimoRepository.filtraPorIgreja(codigo);
	}
	
	@DeleteMapping("/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_EXCLUIR_OBJETO')")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void excluir(@PathVariable Long codigo) {
		dizimoRepository.delete(codigo);
	}
	
	@PutMapping("/atualizarsaldodizimo/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_EDITAR_OBJETO')")
	public ResponseEntity<Dizimo> atualizarSaldoDizimo(@PathVariable Long codigo, @RequestBody BigDecimal valor) {
		Dizimo dizimoRetornado = dizimoRepository.findOne(codigo);
		dizimoRetornado.setValor(valor);
		dizimoRepository.save(dizimoRetornado);
		return ResponseEntity.status(HttpStatus.OK).body(dizimoRetornado);
	}
	
}
