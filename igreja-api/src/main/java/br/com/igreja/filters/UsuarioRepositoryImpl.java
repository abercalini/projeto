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

import br.com.igreja.filter.UsuarioFilter;
import br.com.igreja.model.Usuario;

public class UsuarioRepositoryImpl implements UsuarioRepositoryQuery {
	
	@PersistenceContext
	private EntityManager manager;
	
	
	@Override
	public Usuario filtrarPorEmail(UsuarioFilter usuarioFilter) {
		CriteriaBuilder criteriaBuilder = manager.getCriteriaBuilder();
		CriteriaQuery<Usuario> query = criteriaBuilder.createQuery(Usuario.class);
		Root<Usuario> root = query.from(Usuario.class);
		
		List<Predicate> predicates = new ArrayList<Predicate>();
		
		if(!StringUtils.isEmpty(usuarioFilter.getEmail())) {
			predicates.add(criteriaBuilder.equal(criteriaBuilder.lower(root.get("email")), usuarioFilter.getEmail()));
		}
		
		query.where(predicates.toArray(new Predicate[predicates.size()]));
		
		return manager.createQuery(query).getSingleResult();
	}
	
	
}
