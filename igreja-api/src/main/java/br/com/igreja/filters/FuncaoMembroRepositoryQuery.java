package br.com.igreja.filters;

import java.util.List;

import br.com.igreja.model.FuncaoMembro;

public interface FuncaoMembroRepositoryQuery {
	
	public List<FuncaoMembro> filtrarPorIgreja(Long codigo);
	
}
