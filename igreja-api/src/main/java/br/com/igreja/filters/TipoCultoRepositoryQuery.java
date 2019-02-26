package br.com.igreja.filters;

import java.util.List;

import br.com.igreja.filter.TipoCultoFilter;
import br.com.igreja.model.TipoCulto;

public interface TipoCultoRepositoryQuery {
	
	public List<TipoCulto> filtrarPorIgreja(Long codigo, TipoCultoFilter tipoCulto);
}
