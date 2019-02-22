package br.com.igreja.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.igreja.filter.UsuarioFilter;
import br.com.igreja.model.Usuario;
import br.com.igreja.repository.UsuarioRepository;

@RequestMapping("/usuario")
@RestController
public class UsuarioResource {
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@GetMapping
	public ResponseEntity<Usuario> buscarPorEmail(UsuarioFilter usuarioFilter) {
		Usuario usuarioRetornado = usuarioRepository.filtrarPorEmail(usuarioFilter);
		return usuarioRetornado != null ? ResponseEntity.status(HttpStatus.OK).body(usuarioRetornado) : ResponseEntity.status(HttpStatus.NO_CONTENT).build();
	}
}
