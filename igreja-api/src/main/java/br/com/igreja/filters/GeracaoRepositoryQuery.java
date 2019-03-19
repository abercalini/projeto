package br.com.igreja.filters;

import java.util.List;

import br.com.igreja.model.Geracao;

public interface GeracaoRepositoryQuery {
	
	public List<Geracao> listar(String filtro, Long codigo);
	
}
