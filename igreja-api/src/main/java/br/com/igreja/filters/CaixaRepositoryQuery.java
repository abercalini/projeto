package br.com.igreja.filters;

import java.util.List;

import br.com.igreja.model.Caixa;

public interface CaixaRepositoryQuery {
	
	public List<Caixa> filtrarPorIgreja(Long codigo);
	
	public List<Caixa> verificarCaixa(Long codigo);
}
