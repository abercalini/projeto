package br.com.igreja.filters;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.util.StringUtils;

import br.com.igreja.filter.CentroCustoFilter;
import br.com.igreja.model.CentroCusto;

public class CentroCustoRepositoryImpl implements CentroCustoRepositoryQuery {
	
	@PersistenceContext
	private EntityManager manager;
	
	@Override
	public List<CentroCusto> filtrarPorIgreja(Long codigo, CentroCustoFilter centroCustoFilter) {
		CriteriaBuilder criteriaBuilder = manager.getCriteriaBuilder();
		CriteriaQuery<CentroCusto> query = criteriaBuilder.createQuery(CentroCusto.class);
		Root<CentroCusto> from = query.from(CentroCusto.class);
		
		List<Predicate> predicates = new ArrayList<Predicate>();
		predicates.add(criteriaBuilder.equal(from.get("igreja"), codigo));
		if (!StringUtils.isEmpty(centroCustoFilter.getPesquisa())) {
			predicates.add(criteriaBuilder.or(criteriaBuilder.like(criteriaBuilder.lower(from.get("nome")), "%" + centroCustoFilter.getPesquisa() + "%"),
						criteriaBuilder.like(criteriaBuilder.lower(from.get("tipo")), "%" + centroCustoFilter.getPesquisa() + "%")));
		}
		query.where(predicates.toArray(new Predicate[predicates.size()]));
		
		return manager.createQuery(query).getResultList();
	}

}
