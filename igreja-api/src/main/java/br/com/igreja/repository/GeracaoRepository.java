package br.com.igreja.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.igreja.filters.GeracaoRepositoryQuery;
import br.com.igreja.model.Geracao;

public interface GeracaoRepository extends JpaRepository<Geracao, Long>, GeracaoRepositoryQuery {
	
	
}
