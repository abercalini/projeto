package br.com.igreja.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
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
@Table(name = "despesa")
@Entity
@Data
public class Despesa implements Serializable {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long codigo;
	
	@ManyToOne
	@JoinColumn(name ="codigo_fornecedor")
	private Fornecedor fornecedor;
	
	@ManyToOne
	@JoinColumn(name = "codigo_igreja")
	private Igreja igreja;
	
	private String descricao;
	
	@ManyToOne
	@JoinColumn(name = "codigo_cetro_custo")
	private CentroCusto centroCusto;
	
	@ManyToOne
	@JoinColumn(name = "codigo_caixa")
	private Caixa caixa;
	
	@Column(name = "data_vencimento")
	private LocalDate dataVencimento;
	
	private BigDecimal valor;
	
	private BigDecimal desconto;
	
	private BigDecimal juros;
	
	@Column(name = "quantidade_parcela")
	private Integer quantidadeParcela;
	
	@Column(name = "valor_total")
	private BigDecimal valorTotal;
		
	@Column(name = "forma_pagamento")
	private String formaPagamento;
	
	@Column(name = "data_pagamento")
	private LocalDate dataPagamento;
	
	private boolean parcelado;
	
	@ManyToMany(fetch = FetchType.EAGER, cascade = { CascadeType.PERSIST, CascadeType.MERGE })
	@JoinTable(name = "despesas_parcelas", joinColumns = 
	@JoinColumn(name = "codigo_despesa"), 
	inverseJoinColumns = @JoinColumn(name ="codigo_parcela"))
	private List<Parcela> parcelas = new ArrayList<>();
	
}
