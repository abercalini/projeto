package br.com.igreja.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.igreja.filters.CargoMinistroRespositoryQuery;
import br.com.igreja.model.CargoMinitro;

public interface CargoMinistroRepository extends JpaRepository<CargoMinitro, Long>, CargoMinistroRespositoryQuery {

}
