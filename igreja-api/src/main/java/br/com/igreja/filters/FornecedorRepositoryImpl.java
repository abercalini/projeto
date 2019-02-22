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

import br.com.igreja.filter.FornecedorFilter;
import br.com.igreja.model.Fornecedor;
import br.com.igreja.model.Igreja;

public class FornecedorRepositoryImpl implements FornecedorRepositoryQuery{
	
	@PersistenceContext
	private EntityManager entityManager;
	
	@Override
	public List<Fornecedor> buscarPorNome(Long codigo, FornecedorFilter fornecedorFilter) {
		CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
		CriteriaQuery<Fornecedor> query = criteriaBuilder.createQuery(Fornecedor.class);
		Root<Fornecedor> root = query.from(Fornecedor.class);
		
		Join<Fornecedor, Igreja> join = root.join("igreja", JoinType.INNER);
		
		Predicate[] predicates = pegarParametroUrl(join, fornecedorFilter, criteriaBuilder, root, codigo);
		query.where(predicates);
		
		return entityManager.createQuery(query).getResultList();
	}

	private Predicate[] pegarParametroUrl(Join<Fornecedor, Igreja> join, FornecedorFilter fornecedorFilter,
			CriteriaBuilder criteriaBuilder, Root<Fornecedor> root, Long codigo) {
		
		List<Predicate> predicates = new ArrayList<>();
		
		predicates.add(criteriaBuilder.equal(join.get("codigo"), codigo));
		
		
		if(!StringUtils.isEmpty(fornecedorFilter.getNome())) {
			predicates.add(criteriaBuilder.like(criteriaBuilder.lower(root.get("nome")), "%" + fornecedorFilter.getNome() + "%"));
		}
		
		return predicates.toArray(new Predicate[predicates.size()]);
	}

	
	/*private Predicate[] pegarParametroUrl(FornecedorFilter fornecedorFilter, CriteriaBuilder criteriaBuilder,
			Root<Fornecedor> root) {
		List<Predicate> predicates = new ArrayList<>();
		
		
		
		if(!StringUtils.isEmpty(fornecedorFilter.getNome())) {
			predicates.add(criteriaBuilder.like(criteriaBuilder.lower(root.get("nome")), "%" + fornecedorFilter.getNome() + "%"));
		}
		
		return predicates.toArray(new Predicate[predicates.size()]);
	} */

}
