package br.com.igreja.filters;

import java.util.List;

import br.com.igreja.model.TipoEntrada;

public interface TipoEntradaRepositoryQuery {
	
	public List<TipoEntrada> filtrarPorIgreja(Long codigo, String decricao);
	
}
