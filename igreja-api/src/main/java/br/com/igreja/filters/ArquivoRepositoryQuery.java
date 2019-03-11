package br.com.igreja.filters;

import java.util.List;

import br.com.igreja.model.Arquivo;

public interface ArquivoRepositoryQuery {
	
	public List<Arquivo> filtrarPorIgreja(Long codigo);
	
}
