package br.com.igreja.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.igreja.filters.SituacaoMembroRepositoryQuery;
import br.com.igreja.model.SituacaoMembro;

public interface SituacaoMembroRepository extends JpaRepository<SituacaoMembro, Long>, SituacaoMembroRepositoryQuery {

}
