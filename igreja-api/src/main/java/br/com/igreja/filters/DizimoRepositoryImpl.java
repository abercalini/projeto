package br.com.igreja.filters;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Join;
import javax.persistence.criteria.JoinType;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import br.com.igreja.model.Dizimo;
import br.com.igreja.model.Igreja;

public class DizimoRepositoryImpl implements DizimoRepositoryQuery {
	
	@PersistenceContext
	private EntityManager manager;
	
	@Override
	public List<Dizimo> filtraPorIgreja(Long codigo) {
		CriteriaBuilder criteriaBuilder = manager.getCriteriaBuilder();
		CriteriaQuery<Dizimo> query = criteriaBuilder.createQuery(Dizimo.class);
		Root<Dizimo> from = query.from(Dizimo.class);
		
		Join<Dizimo, Igreja> joinIgreja = from.join("igreja", JoinType.INNER);
		List<Predicate> predicates = new ArrayList<>();
		
		predicates.add(criteriaBuilder.equal(joinIgreja.get("codigo"), codigo));
		
		query.where(predicates.toArray(new Predicate[predicates.size()]));
	
		return manager.createQuery(query).getResultList();
	}

}
