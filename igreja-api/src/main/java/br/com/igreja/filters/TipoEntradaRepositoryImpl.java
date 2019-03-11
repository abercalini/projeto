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

import br.com.igreja.model.TipoEntrada;

public class TipoEntradaRepositoryImpl implements TipoEntradaRepositoryQuery {

	@PersistenceContext
	private EntityManager manager;
	
	@Override
	public List<TipoEntrada> filtrarPorIgreja(Long codigo, String descricao) {
		CriteriaBuilder criteriaBuilder = manager.getCriteriaBuilder();
		CriteriaQuery<TipoEntrada> query = criteriaBuilder.createQuery(TipoEntrada.class);
		Root<TipoEntrada> from = query.from(TipoEntrada.class);
		
		List<Predicate> predicates = new ArrayList<>();
		predicates.add(criteriaBuilder.equal(from.get("igreja"), codigo));
		
		if(!StringUtils.isEmpty(descricao)) {
			predicates.add(criteriaBuilder.like(criteriaBuilder.lower(from.get("descricao")), "%" + descricao + "%"));
		}
		
		query.where(predicates.toArray(new Predicate[predicates.size()]));
		
		return manager.createQuery(query).getResultList();
	}

}
