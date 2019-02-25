package br.com.igreja.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.igreja.filters.CaixaRepositoryQuery;
import br.com.igreja.model.Caixa;

public interface CaixaRepository extends JpaRepository<Caixa, Long>, CaixaRepositoryQuery {

}
