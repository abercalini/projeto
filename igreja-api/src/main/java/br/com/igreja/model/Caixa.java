package br.com.igreja.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@SuppressWarnings("serial")
@Table(name = "caixa")
@Entity
public class Caixa implements Serializable {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long codigo;
	
	private String nome;
	
	@Column(name = "data_fechamento")
	private LocalDate dataFechamento;
	
	@Column(name = "data_abertura")
	private LocalDate dataAbertura;
	
	@Column(name = "valor_receitas")
	private BigDecimal valorReceita;
	
	@Column(name = "valor_despesas")
	private BigDecimal valorDespesas;
	
	@Column(name = "saldo_fechamento")
	private BigDecimal saldoFechamento;
	
	@Column(name = "saldo_abertura")
	private BigDecimal saldoAbertura;
	
	private boolean status;
	
	@ManyToOne
	@JoinColumn(name = "codigo_igreja")
	private Igreja igreja;

	public Long getCodigo() {
		return codigo;
	}

	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}

	public LocalDate getDataFechamento() {
		return dataFechamento;
	}

	public void setDataFechamento(LocalDate dataFechamento) {
		this.dataFechamento = dataFechamento;
	}

	public LocalDate getDataAbertura() {
		return dataAbertura;
	}

	public void setDataAbertura(LocalDate dataAbertura) {
		this.dataAbertura = dataAbertura;
	}

	public BigDecimal getValorReceita() {
		return valorReceita;
	}

	public void setValorReceita(BigDecimal valorReceita) {
		this.valorReceita = valorReceita;
	}

	public BigDecimal getValorDespesas() {
		return valorDespesas;
	}

	public void setValorDespesas(BigDecimal valorDespesas) {
		this.valorDespesas = valorDespesas;
	}

	

	public BigDecimal getSaldoFechamento() {
		return saldoFechamento;
	}

	public void setSaldoFechamento(BigDecimal saldoFechamento) {
		this.saldoFechamento = saldoFechamento;
	}

	public BigDecimal getSaldoAbertura() {
		return saldoAbertura;
	}

	public void setSaldoAbertura(BigDecimal saldoAbertura) {
		this.saldoAbertura = saldoAbertura;
	}

	public Igreja getIgreja() {
		return igreja;
	}

	public void setIgreja(Igreja igreja) {
		this.igreja = igreja;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}
	
	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}
	
	@Override
	public String toString() {
		return "Caixa [codigo=" + codigo + ", nome=" + nome + ", dataFechamento=" + dataFechamento + ", dataAbertura="
				+ dataAbertura + ", valorReceita=" + valorReceita + ", valorDespesas=" + valorDespesas
				+ ", saldoFechamento=" + saldoFechamento + ", saldoAbertura=" + saldoAbertura + ", status=" + status
				+ ", igreja=" + igreja + "]";
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
		Caixa other = (Caixa) obj;
		if (codigo == null) {
			if (other.codigo != null)
				return false;
		} else if (!codigo.equals(other.codigo))
			return false;
		return true;
	}
}
