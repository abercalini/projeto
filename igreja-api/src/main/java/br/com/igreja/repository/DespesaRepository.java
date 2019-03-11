package br.com.igreja.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.igreja.model.Despesa;

public interface DespesaRepository extends JpaRepository<Despesa, Long>{

}
