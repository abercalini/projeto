package br.com.igreja.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;

@SuppressWarnings("serial")
@Table(name = "entrada")
@Entity
@Data
public class Entrada implements Serializable {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long codigo;
	
	private String descricao;
	
	@ManyToOne
	@JoinColumn(name = "codigo_centro_custo")
	private CentroCusto centroCusto;
	
	@ManyToOne
	@JoinColumn(name = "codigo_caixa")
	private Caixa caixa;
	
	@ManyToOne
	@JoinColumn(name = "codigo_tipo_entrada")
	private TipoEntrada tipoEntrada;
	
	@Column(name = "data_pagamento")
	private LocalDate dataPagamento;
	
	@Column(name = "data_vencimento")
	private LocalDate dataVencimento;
	
	private BigDecimal valor;
	
	private BigDecimal desconto;
	
	private BigDecimal juros;
	
	@Column(name = "valor_total")
	private BigDecimal valorTotal;
	
	@Column(name = "forma_pagamento")
	private String formaPagamento;
	
	private boolean parcelado;
	
	@Column(name = "quantidade_parcela")
	private Integer quantidadeParcela;
	
	@ManyToOne
	@JoinColumn(name = "codigo_igreja")
	private Igreja igreja;
	
	@ManyToMany(fetch = FetchType.EAGER, cascade = {CascadeType.PERSIST, CascadeType.MERGE})
	@JoinTable(name = "entradas_parcelas", 
	joinColumns = @JoinColumn(name = "codigo_entrada"), 
	inverseJoinColumns = @JoinColumn(name = "codigo_parcela_entrada"))
	private List<ParcelaEntrada> parcelas;
	
	
}
