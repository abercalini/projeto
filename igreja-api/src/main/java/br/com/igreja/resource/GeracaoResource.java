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

import br.com.igreja.model.Geracao;
import br.com.igreja.repository.GeracaoRepository;

@RequestMapping("/geracao")
@RestController
public class GeracaoResource {
	
	
	@Autowired
	private GeracaoRepository geracaoRepository;
	
	
	@PostMapping
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_OBJETO')")
	public ResponseEntity<Geracao> salvar(@RequestBody Geracao gerecao) {
		Geracao geracaoSalva = geracaoRepository.save(gerecao);
		return ResponseEntity.status(HttpStatus.CREATED).body(geracaoSalva);
	}
	
	@PutMapping("/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_EDITAR_OBJETO')")
	public ResponseEntity<Geracao> atualizar(@PathVariable Long codigo, @RequestBody Geracao geracao) {
		Geracao geracaoRetornada = geracaoRepository.findOne(codigo);
		BeanUtils.copyProperties(geracao, geracaoRetornada, "codigo");
		geracaoRepository.save(geracaoRetornada);
		return ResponseEntity.status(HttpStatus.OK).body(geracaoRetornada);
	}
	
	@GetMapping("/filtrarporigreja/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_OBJETO')")
	@ResponseStatus(HttpStatus.OK)
	public List<Geracao> listar(@PathVariable Long codigo, String filtro) {
		return geracaoRepository.listar(filtro, codigo);
	}
	
	@GetMapping("/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_OBJETO')")
	public ResponseEntity<Geracao> buscarPorCodigo(@PathVariable Long codigo) {
		Geracao geracaoRetornada = geracaoRepository.findOne(codigo);
		return geracaoRetornada == null ? ResponseEntity.noContent().build() : ResponseEntity.status(HttpStatus.OK).body(geracaoRetornada);
	}
	
	@DeleteMapping("/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_EXCLUIR_OBJETO')")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void excluir(@PathVariable Long codigo) {
		geracaoRepository.delete(codigo);
	}
	
}
