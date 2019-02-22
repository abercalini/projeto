package br.com.igreja.filters;

import java.util.List;

import br.com.igreja.model.TipoAdesao;

public interface TipoAdesaoRepositoryQuery {
	
	public List<TipoAdesao> filtarPorIgreja(Long codigo);
	
}
