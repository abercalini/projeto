package br.com.igreja.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.igreja.model.Caixa;
import br.com.igreja.repository.CaixaRepository;

@RestController
@RequestMapping("/caixa")
public class CaixaResource {
	
	@Autowired
	private CaixaRepository caixaRepository;
	
	@PostMapping
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_OBJETO')")
	public ResponseEntity<Caixa> salvar(@RequestBody Caixa caixa) {
		Caixa caixaRetornado = caixaRepository.save(caixa);
		return ResponseEntity.status(HttpStatus.CREATED).body(caixaRetornado);
	}
	
	@GetMapping("/filtrarporigreja/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_OBJETO')")
	@ResponseStatus(HttpStatus.OK)
	public List<Caixa> listarTodos(@PathVariable Long codigo) {
		return caixaRepository.filtrarPorIgreja(codigo);
	}
	
	@PutMapping("/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_EDITAR_OBJETO')")
	public ResponseEntity<Caixa> atualizar(@PathVariable Long codigo, @RequestBody boolean status) {
		Caixa caixaRetornado = caixaRepository.findOne(codigo);
		caixaRetornado.setStatus(status);
		caixaRepository.save(caixaRetornado);
		return ResponseEntity.status(HttpStatus.OK).body(caixaRetornado);
	}
	
	
}
