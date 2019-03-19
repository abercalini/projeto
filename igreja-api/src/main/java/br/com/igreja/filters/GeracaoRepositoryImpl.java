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

import br.com.igreja.model.Geracao;

public class GeracaoRepositoryImpl implements GeracaoRepositoryQuery {

	
	@PersistenceContext
	private EntityManager manager;
	
	@Override
	public List<Geracao> listar(String filtro, Long codigo) {
		CriteriaBuilder criteriaBuilder = manager.getCriteriaBuilder();
		CriteriaQuery<Geracao> query = criteriaBuilder.createQuery(Geracao.class);
		Root<Geracao> from = query.from(Geracao.class);
		
		List<Predicate> predicates = new ArrayList<>();
		predicates.add(criteriaBuilder.equal(from.get("igreja"), codigo));
		
		if (!StringUtils.isEmpty(filtro)) {
			predicates.add(criteriaBuilder.or(criteriaBuilder.like(criteriaBuilder.lower(from.get("nome")), "%" + filtro + "%"),
					criteriaBuilder.like(criteriaBuilder.lower(from.get("dias")), "%" + filtro + "%"),
					criteriaBuilder.like(criteriaBuilder.lower(from.get("endereco")), "%" + filtro + "%")));
		}
		
		query.where(predicates.toArray(new Predicate[predicates.size()]));
		
		return manager.createQuery(query).getResultList();
	}

}
