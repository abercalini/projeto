package br.com.igreja.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.igreja.model.Entrada;
import br.com.igreja.repository.EntradaRepository;

@RestController
@RequestMapping("/entrada")
public class EntradaResource {

	@Autowired
	private EntradaRepository entradaRepository;
	
	@PostMapping
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_OBJETO')")
	public ResponseEntity<Entrada> salvar(@RequestBody Entrada entrada) {
		Entrada entradaSalva = this.entradaRepository.save(entrada);
		return ResponseEntity.status(HttpStatus.CREATED).body(entradaSalva);
	}
	
	@GetMapping("/buscarporigreja/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_OBJETO')")
	@ResponseStatus(HttpStatus.OK)
	public List<Entrada> listarTodos(@PathVariable Long codigo) {
		return entradaRepository.filtrarPorIgreja(codigo);
	}
	
	@GetMapping("/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_OBJETO')")
	public ResponseEntity<Entrada> buscarPorCodigo(@PathVariable Long codigo) {
		Entrada entradaRetornada = entradaRepository.findOne(codigo);	
		return entradaRetornada != null ? ResponseEntity.status(HttpStatus.OK).body(entradaRetornada) : ResponseEntity.noContent().build();
	}
	
	@DeleteMapping("/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_EXCLUIR_OBJETO')")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void excluir(@PathVariable Long codigo) {
		entradaRepository.delete(codigo);
	}
	
	
	
	
}
