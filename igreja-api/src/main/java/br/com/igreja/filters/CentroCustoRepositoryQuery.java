package br.com.igreja.filters;

import java.util.List;

import br.com.igreja.filter.CentroCustoFilter;
import br.com.igreja.model.CentroCusto;

public interface CentroCustoRepositoryQuery {
	
	public List<CentroCusto> filtrarPorIgreja(Long codigo, CentroCustoFilter centroCustoFilter);
	
}
