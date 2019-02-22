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
import br.com.igreja.model.Membro;

public class MembroRespositoryImpl implements MembroRepositoryQuery {

	
	@PersistenceContext
	private EntityManager manager;
	
	@Override
	public List<Membro> filtrarPorIgreja(Long codigo) {
		CriteriaBuilder criteriaBuilder = manager.getCriteriaBuilder();
		CriteriaQuery<Membro> query = criteriaBuilder.createQuery(Membro.class);
		Root<Membro> membro = query.from(Membro.class);
		
		Join<Membro, Igreja> joinIgreja = membro.join("igreja", JoinType.INNER);
		
		Predicate[] predicates = juntandoTabelas(joinIgreja, codigo, criteriaBuilder);
		query.where(predicates);
		
		return manager.createQuery(query).getResultList();
	}

	private Predicate[] juntandoTabelas(Join<Membro, Igreja> joinIgreja, Long codigo, CriteriaBuilder criteriaBuilder) {
		List<Predicate> predicates = new ArrayList<>();
		
		predicates.add(criteriaBuilder.equal(joinIgreja.get("codigo"), codigo));
		
		return predicates.toArray(new Predicate[predicates.size()]);
	}


}

