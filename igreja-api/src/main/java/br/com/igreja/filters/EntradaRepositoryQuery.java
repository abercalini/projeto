package br.com.igreja.filters;

import java.util.List;

import br.com.igreja.model.Entrada;

public interface EntradaRepositoryQuery {
	
	public List<Entrada> filtrarPorIgreja(Long codigo);
	
}
