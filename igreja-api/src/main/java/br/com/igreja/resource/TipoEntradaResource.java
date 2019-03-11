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

import br.com.igreja.model.TipoEntrada;
import br.com.igreja.repository.TipoEntradaRepository;

@RestController
@RequestMapping("/tipoentrada")
public class TipoEntradaResource {
	
	@Autowired
	private TipoEntradaRepository tipoEntradaRepository;
	
	@PostMapping
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_OBJETO')")
	public ResponseEntity<TipoEntrada> salvar(@RequestBody TipoEntrada tipoEntrada) {
		TipoEntrada tipoEntradaRetornada = tipoEntradaRepository.save(tipoEntrada);
		return ResponseEntity.status(HttpStatus.CREATED).body(tipoEntradaRetornada);
	}
	
	@PutMapping("/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_EDITAR_OBJETO')")
	public ResponseEntity<TipoEntrada> editar(@PathVariable Long codigo, @RequestBody TipoEntrada tipoEntrada) {
		TipoEntrada tipoEntradaRetornada = tipoEntradaRepository.findOne(codigo);
		
		BeanUtils.copyProperties(tipoEntrada, tipoEntradaRetornada, "codigo");
		tipoEntradaRepository.save(tipoEntradaRetornada);
		
		return ResponseEntity.status(HttpStatus.OK).body(tipoEntradaRetornada);
	}

	
	@GetMapping("/filtrarporigreja/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_OBJETO')")
	@ResponseStatus(HttpStatus.OK)
	public List<TipoEntrada> listarTodos(@PathVariable Long codigo, String descricao) {
		return tipoEntradaRepository.filtrarPorIgreja(codigo, descricao);
	}
	
	@GetMapping("/buscarporcodigo/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_OBJETO')")
	public ResponseEntity<TipoEntrada> buscarPorCodigo(@PathVariable Long codigo) {
		TipoEntrada tipoEntradaRetornada = tipoEntradaRepository.findOne(codigo);
		return tipoEntradaRetornada != null ? ResponseEntity.status(HttpStatus.OK).body(tipoEntradaRetornada) : ResponseEntity.notFound().build();
	}
	
	@DeleteMapping("/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_EXCLUIR_OBJETO')")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void excluir(@PathVariable Long codigo) {
		tipoEntradaRepository.delete(codigo);
	}

}
