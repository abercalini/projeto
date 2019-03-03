package br.com.igreja.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.igreja.filters.CentroCustoRepositoryQuery;
import br.com.igreja.model.CentroCusto;

public interface CentroCustoRepository extends JpaRepository<CentroCusto, Long>, CentroCustoRepositoryQuery {

}
