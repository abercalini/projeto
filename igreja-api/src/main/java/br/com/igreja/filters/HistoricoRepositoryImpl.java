package br.com.igreja.filters;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Join;
import javax.persistence.criteria.JoinType;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.util.StringUtils;

import br.com.igreja.filter.HistoricoFilter;
import br.com.igreja.model.Historico;
import br.com.igreja.model.Igreja;

public class HistoricoRepositoryImpl implements HistoricoRepositoryQuery{
	
	@PersistenceContext
	private EntityManager entityManager;
	
	@Override
	public List<Historico> buscarPorHistorico(Long codigo, HistoricoFilter historicoFilter) {
		CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
		CriteriaQuery<Historico> query = criteriaBuilder.createQuery(Historico.class);
		Root<Historico> root = query.from(Historico.class);
		
		Join<Historico, Igreja> joinIgreja = root.join("igreja", JoinType.INNER);
		
		Predicate[] predicates = pegarParametrosUrl(joinIgreja, codigo, historicoFilter, criteriaBuilder, root);
		query.where(predicates);
		
		TypedQuery<Historico> createQuery = entityManager.createQuery(query);
		return createQuery.getResultList();
	}

	private Predicate[] pegarParametrosUrl(Join<Historico, Igreja> joinIgreja, Long codigo, 
			HistoricoFilter historicoFilter, CriteriaBuilder criteriaBuilder, Root<Historico> root) {
			
		List<Predicate> predicates = new ArrayList<>();
		
		predicates.add(criteriaBuilder.equal(joinIgreja.get("codigo"), codigo));
		
		if(!StringUtils.isEmpty(historicoFilter.getUsuario())) {
			predicates.add(criteriaBuilder.like(criteriaBuilder.lower(root.get("usuario")), "%" + historicoFilter.getUsuario() + "%" ));
		}
		
		return predicates.toArray(new Predicate[predicates.size()]);
	
	}
}
