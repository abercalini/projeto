CREATE TABLE parcela (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	valor DECIMAL(10,2),
	numero_parcela INTEGER
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE despesa (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	data_vencimento DATE,
	valor DECIMAL(10,2),
	desconto DECIMAL(10,2),
	juros DECIMAL(10,2),
	valor_total DECIMAL(10,2),
	forma_pagamento VARCHAR(50),
	data_pagamento DATE,
	quantidade_parcela INTEGER,
	parcelado boolean,
	codigo_fornecedor BIGINT(20),
	codigo_igreja BIGINT(20),
	codigo_cetro_custo BIGINT(20),
	codigo_caixa BIGINT(20),
	FOREIGN KEY (codigo_fornecedor) REFERENCES fornecedor(codigo),
	FOREIGN KEY (codigo_igreja) REFERENCES igreja(codigo),
	FOREIGN KEY (codigo_cetro_custo) REFERENCES centro_custo(codigo),
	FOREIGN KEY (codigo_caixa) REFERENCES caixa(codigo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE despesas_parcelas (
	valor DECIMAL(10,2),
	codigo_despesa BIGINT(20),
	codigo_parcela BIGINT(20),
	FOREIGN KEY (codigo_despesa) REFERENCES despesa(codigo),
	FOREIGN KEY (codigo_parcela) REFERENCES parcela(codigo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
