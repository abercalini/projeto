package br.com.igreja.filters;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import br.com.igreja.model.CargoMinitro;

public class CargoMinistroRepositoryImpl implements CargoMinistroRespositoryQuery {
	
	
	@PersistenceContext
	private EntityManager manager;
	
	@Override
	public List<CargoMinitro> filtrarPorIgreja(Long codigo) {
		CriteriaBuilder criteriaBuilder = manager.getCriteriaBuilder();
		CriteriaQuery<CargoMinitro> query = criteriaBuilder.createQuery(CargoMinitro.class);
		Root<CargoMinitro> cargoMinistro = query.from(CargoMinitro.class);
		
		
		return null;
	}

}
