package br.com.igreja.filters;

import java.util.List;

import br.com.igreja.model.Membro;

public interface MembroRepositoryQuery {
	
	public List<Membro> filtrarPorIgreja(Long codigo);
	
}
