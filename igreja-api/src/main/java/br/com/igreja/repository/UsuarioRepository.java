package br.com.igreja.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.igreja.filters.UsuarioRepositoryQuery;
import br.com.igreja.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long>, UsuarioRepositoryQuery {
	
	public Optional<Usuario> findByEmail(String email);
	
	
}
