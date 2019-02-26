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

import org.springframework.util.StringUtils;

import br.com.igreja.filter.TipoCultoFilter;
import br.com.igreja.model.Igreja;
import br.com.igreja.model.TipoCulto;

public class TipoCultoRepositoryImpl implements TipoCultoRepositoryQuery {
	
	@PersistenceContext
	private EntityManager manager;
	
	
	@Override
	public List<TipoCulto> filtrarPorIgreja(Long codigo, TipoCultoFilter tipoCulto) {
		CriteriaBuilder criteriaBuilder = manager.getCriteriaBuilder();
		CriteriaQuery<TipoCulto> query = criteriaBuilder.createQuery(TipoCulto.class);
		
		Root<TipoCulto> from = query.from(TipoCulto.class);
		
		Join<TipoCulto, Igreja> join = from.join("igreja", JoinType.INNER);
		
		List<Predicate> predicates = new ArrayList<>();
		
		predicates.add(criteriaBuilder.equal(join.get("codigo"), codigo));
		
		if(!StringUtils.isEmpty(tipoCulto.getDescricao()) || !StringUtils.isEmpty(tipoCulto.getObjetivo())) {
			predicates.add(criteriaBuilder.or(criteriaBuilder.like(criteriaBuilder.lower(from.get("descricao")), "%" + tipoCulto.getDescricao() + "%"),
					criteriaBuilder.like(criteriaBuilder.lower(from.get("objetivo")), "%" + tipoCulto.getObjetivo() + "%")));
		}
		
		
		query.where(predicates.toArray(new Predicate[predicates.size()]));
		
		
		return manager.createQuery(query).getResultList();
		
	}

	
}
