package br.com.igreja.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.igreja.filters.TipoCultoRepositoryQuery;
import br.com.igreja.model.TipoCulto;

public interface TipoCultoRepository extends JpaRepository<TipoCulto, Long>, TipoCultoRepositoryQuery{

}
