package br.com.igreja.filters;

import java.util.List;

import br.com.igreja.model.SituacaoMembro;

public interface SituacaoMembroRepositoryQuery {
	
	public List<SituacaoMembro> filtrarPorIgreja(Long codigo);
	
}
