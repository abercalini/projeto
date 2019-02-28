package br.com.igreja.filters;

import java.util.List;

import br.com.igreja.model.Oferta;

public interface OfertaRepositoryQuery {
	
	public List<Oferta> filtrarPorIgreja(Long codigo);
	
}
