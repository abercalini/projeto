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

import br.com.igreja.model.Caixa;
import br.com.igreja.model.Igreja;

public class CaixaRepositoryImpl implements CaixaRepositoryQuery {
	
	
	@PersistenceContext
	private EntityManager manager;
	
	@Override
	public List<Caixa> filtrarPorIgreja(Long codigo) {
		CriteriaBuilder criteriaBuilder = manager.getCriteriaBuilder();
		CriteriaQuery<Caixa> query = criteriaBuilder.createQuery(Caixa.class);
		Root<Caixa> caixa = query.from(Caixa.class);
		Join<Caixa, Igreja> joinIgreja = caixa.join("igreja", JoinType.INNER);
		
		List<Predicate> predicates = new ArrayList<>();
		
		predicates.add(criteriaBuilder.equal(joinIgreja.get("codigo"), codigo));
		query.where(predicates.toArray(new Predicate[predicates.size()]));
		
		return manager.createQuery(query).getResultList();
	}

}
