package br.com.igreja.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.igreja.filters.ArquivoRepositoryQuery;
import br.com.igreja.model.Arquivo;

public interface ArquivoRepository extends JpaRepository<Arquivo, Long>, ArquivoRepositoryQuery {

}
