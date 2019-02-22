package br.com.igreja.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.igreja.filters.DistritoRepositoryQuery;
import br.com.igreja.model.Distrito;

public interface DistritoRepository extends JpaRepository<Distrito, Long>, DistritoRepositoryQuery{
	
}
