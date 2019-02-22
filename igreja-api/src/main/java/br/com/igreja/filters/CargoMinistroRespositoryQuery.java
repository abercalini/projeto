package br.com.igreja.filters;

import java.util.List;

import br.com.igreja.model.CargoMinitro;

public interface CargoMinistroRespositoryQuery {
	
	public List<CargoMinitro> filtrarPorIgreja(Long codigo);
	
}
