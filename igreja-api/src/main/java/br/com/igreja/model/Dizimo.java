package br.com.igreja.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@SuppressWarnings("serial")
@Table(name = "dizimo")
@Entity
public class Dizimo implements Serializable {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long codigo;
	
	@ManyToOne
	@JoinColumn(name = "codigo_membro")
	private Membro membro;
	
	@ManyToOne
	@JoinColumn(name = "codigo_culto")
	private TipoCulto tipoCulto;
	
	@ManyToOne
	@JoinColumn(name = "codigo_igreja")
	private Igreja igreja;
	
	@Column(name = "forma_de_pagamento")
	private String formaDePagamento;
		
	@Column(name = "data_dizimo")
	private LocalDateTime dataDizimo;
	
	private BigDecimal valor;
	
	private String observacao;


	public Long getCodigo() {
		return codigo;
	}

	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}

	public String getObservacao() {
		return observacao;
	}

	public void setObservacao(String observacao) {
		this.observacao = observacao;
	}

	public Membro getMembro() {
		return membro;
	}


	public void setMembro(Membro membro) {
		this.membro = membro;
	}


	public TipoCulto getTipoCulto() {
		return tipoCulto;
	}


	public void setTipoCulto(TipoCulto tipoCulto) {
		this.tipoCulto = tipoCulto;
	}


	public Igreja getIgreja() {
		return igreja;
	}


	public void setIgreja(Igreja igreja) {
		this.igreja = igreja;
	}




	public String getFormaDePagamento() {
		return formaDePagamento;
	}


	public void setFormaDePagamento(String formaDePagamento) {
		this.formaDePagamento = formaDePagamento;
	}


	public BigDecimal getValor() {
		return valor;
	}


	public void setValor(BigDecimal valor) {
		this.valor = valor;
	}


	public LocalDateTime getDataDizimo() {
		return dataDizimo;
	}


	public void setDataDizimo(LocalDateTime dataDizimo) {
		this.dataDizimo = dataDizimo;
	}


	
}
