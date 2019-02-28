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
@Table(name = "oferta")
@Entity
public class Oferta implements Serializable {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long codigo;
	
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
	
	@ManyToOne
	@JoinColumn(name = "codigo_caixa")
	private Caixa caixa;
	
	@Column(name = "tipo_oferta")
	private String tipoOferta;
	
	private String observacao;
	
	private String conferente1;
	
	private String conferente2;
	
	

	public Long getCodigo() {
		return codigo;
	}

	public void setCodigo(Long codigo) {
		this.codigo = codigo;
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

	public LocalDateTime getDataDizimo() {
		return dataDizimo;
	}

	public void setDataDizimo(LocalDateTime dataDizimo) {
		this.dataDizimo = dataDizimo;
	}

	public BigDecimal getValor() {
		return valor;
	}

	public void setValor(BigDecimal valor) {
		this.valor = valor;
	}

	public Caixa getCaixa() {
		return caixa;
	}

	public void setCaixa(Caixa caixa) {
		this.caixa = caixa;
	}
	
	public String getTipoOferta() {
		return tipoOferta;
	}

	public void setTipoOferta(String tipoOferta) {
		this.tipoOferta = tipoOferta;
	}

	public String getObservacao() {
		return observacao;
	}

	public void setObservacao(String observacao) {
		this.observacao = observacao;
	}

	public String getConferente1() {
		return conferente1;
	}

	public void setConferente1(String conferente1) {
		this.conferente1 = conferente1;
	}

	public String getConferente2() {
		return conferente2;
	}

	public void setConferente2(String conferente2) {
		this.conferente2 = conferente2;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((codigo == null) ? 0 : codigo.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Oferta other = (Oferta) obj;
		if (codigo == null) {
			if (other.codigo != null)
				return false;
		} else if (!codigo.equals(other.codigo))
			return false;
		return true;
	}
	
}
