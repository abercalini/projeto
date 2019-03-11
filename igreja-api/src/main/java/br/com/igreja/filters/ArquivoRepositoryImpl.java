package br.com.igreja.filters;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import br.com.igreja.model.Arquivo;

public class ArquivoRepositoryImpl implements ArquivoRepositoryQuery {
	
	@PersistenceContext
	private EntityManager manager;
	
	@Override
	public List<Arquivo> filtrarPorIgreja(Long codigo) {
		CriteriaBuilder criteriaBuilder = manager.getCriteriaBuilder();
		CriteriaQuery<Arquivo> query = criteriaBuilder.createQuery(Arquivo.class);
		Root<Arquivo> from = query.from(Arquivo.class);
		
		List<Predicate> predicates = new ArrayList<Predicate>();
		predicates.add(criteriaBuilder.equal(from.get("igreja"), codigo));
		
		query.where(predicates.toArray(new Predicate[predicates.size()]));
		
		return manager.createQuery(query).getResultList();
	}

}
