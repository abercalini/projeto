package br.com.igreja.filter;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import br.com.igreja.model.Caixa;
import br.com.igreja.model.TipoCulto;

public class OfertaFilter {
	
	
	private TipoCulto tipoCulto;
	
	private String formaDePagamento;
		
	private LocalDateTime dataDizimo;
	
	private BigDecimal valor;
	
	private Caixa caixa;

	public TipoCulto getTipoCulto() {
		return tipoCulto;
	}

	public void setTipoCulto(TipoCulto tipoCulto) {
		this.tipoCulto = tipoCulto;
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
}
