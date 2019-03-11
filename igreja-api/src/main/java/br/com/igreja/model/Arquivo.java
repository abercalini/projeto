package br.com.igreja.model;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;

@Table(name = "arquivo")
@Entity
@SuppressWarnings("serial")
@Data
public class Arquivo implements Serializable {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long codigo;
	
	@Lob
	private byte[] arquivo;
	
	@Column(name = "nome_arquivo")
	private String nomeArquivo;
	
	private String descricao;
	
	private LocalDate data;
	
	@ManyToOne
	@JoinColumn(name = "codigo_igreja")
	private Igreja igreja;
}
