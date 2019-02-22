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

import br.com.igreja.model.Igreja;
import br.com.igreja.model.SituacaoMembro;

public class SituacaoMembroRepositoryImpl implements SituacaoMembroRepositoryQuery {
	
	@PersistenceContext
	private EntityManager manager;

	@Override
	public List<SituacaoMembro> filtrarPorIgreja(Long codigo) {
		CriteriaBuilder criteriaBuilder = manager.getCriteriaBuilder();
		CriteriaQuery<SituacaoMembro> query = criteriaBuilder.createQuery(SituacaoMembro.class);
		Root<SituacaoMembro> situacaoMembro = query.from(SituacaoMembro.class);
		
		Join<SituacaoMembro, Igreja> join = situacaoMembro.join("igreja", JoinType.INNER);
		List<Predicate> predicates = new ArrayList<>();
		
		predicates.add(criteriaBuilder.equal(join.get("codigo"), codigo));
		query.where(predicates.toArray(new Predicate[predicates.size()]));
		
		return manager.createQuery(query).getResultList();
	}

}
