package br.com.igreja.model;

public enum FormaDePagamento {
	
	CARTAO_DE_CREDITO("Cartão de credito"),
	CARTAO_DE_DEBITO("Cartão de débito"),
	DINHEIRO("Dinheiro");
	
	private final String forma_de_pagamento;
	
	FormaDePagamento(final String forma) {
		this.forma_de_pagamento = forma;
	}

	public String getFormaPagamento() {
		return forma_de_pagamento;
	}
	
	
}
