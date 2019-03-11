package br.com.igreja.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.igreja.filters.EntradaRepositoryQuery;
import br.com.igreja.model.Entrada;

public interface EntradaRepository extends JpaRepository<Entrada, Long>, EntradaRepositoryQuery {

}
