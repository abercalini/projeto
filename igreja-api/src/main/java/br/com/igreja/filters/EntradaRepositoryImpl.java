package br.com.igreja.filters;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import br.com.igreja.model.Entrada;

public class EntradaRepositoryImpl implements EntradaRepositoryQuery {
	
	@PersistenceContext
	private EntityManager manager;
	
	@Override
	public List<Entrada> filtrarPorIgreja(Long codigo) {
		CriteriaBuilder criteriaBuilder = manager.getCriteriaBuilder();
		CriteriaQuery<Entrada> query = criteriaBuilder.createQuery(Entrada.class);
		Root<Entrada> from = query.from(Entrada.class);
		
		List<Predicate> predicates = new ArrayList<>();
		predicates.add(criteriaBuilder.equal(from.get("igreja"), codigo));
		query.where(predicates.toArray(new Predicate[predicates.size()]));
		
		return manager.createQuery(query).getResultList();
	}

}
