package br.com.igreja.filters;

import java.util.List;

import br.com.igreja.model.Dizimo;

public interface DizimoRepositoryQuery {
	
	public List<Dizimo> filtraPorIgreja(Long codigo);
}
