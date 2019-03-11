package br.com.igreja.model;

import java.io.Serializable;
import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;


@SuppressWarnings("serial")
@Table(name = "parcela")
@Entity
@Data
public class Parcela implements Serializable {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long codigo;
	
	@Column(name = "numero_parcela")
	private Integer numeroParcela;
	
	private BigDecimal valor;
	
}
