package br.com.igreja.filters;

import java.util.List;

import br.com.igreja.model.Distrito;

public interface DistritoRepositoryQuery {
	
	public List<Distrito> filtrarPorIgreja(Long codigo);
	
}
