package br.com.igreja.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.igreja.filters.TipoEntradaRepositoryQuery;
import br.com.igreja.model.TipoEntrada;

public interface TipoEntradaRepository extends JpaRepository<TipoEntrada, Long>, TipoEntradaRepositoryQuery {

}
