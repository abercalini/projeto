package br.com.igreja.filters;

import br.com.igreja.filter.UsuarioFilter;
import br.com.igreja.model.Usuario;

public interface UsuarioRepositoryQuery {
	
	public Usuario filtrarPorEmail(UsuarioFilter usuarioFilter);
	
}
