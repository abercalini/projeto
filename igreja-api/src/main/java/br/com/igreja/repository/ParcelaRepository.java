package br.com.igreja.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.igreja.model.Parcela;

public interface ParcelaRepository extends JpaRepository<Parcela, Long>{
	
}
