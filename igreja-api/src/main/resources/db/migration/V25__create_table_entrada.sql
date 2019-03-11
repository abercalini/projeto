CREATE TABLE parcela_entrada (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	valor DECIMAL(10,2),
	data_vencimento DATE
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE entrada (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	data_pagamento DATE,
	data_vencimento DATE,
	valor DECIMAL(10,2),
	desconto DECIMAL(10,2),
	juros DECIMAL(10,2),
	valor_total DECIMAL(10,2),
	forma_pagamento VARCHAR(50),
	parcelado boolean,
	quantidade_parcela INTEGER,
	codigo_centro_custo BIGINT(20),
	codigo_caixa BIGINT(20),
	codigo_tipo_entrada BIGINT(20),
	codigo_igreja BIGINT(20),
	FOREIGN KEY (codigo_centro_custo) REFERENCES centro_custo(codigo),
	FOREIGN KEY (codigo_caixa) REFERENCES caixa(codigo),
	FOREIGN KEY (codigo_tipo_entrada) REFERENCES tipo_entrada(codigo),
	FOREIGN KEY (codigo_igreja) REFERENCES igreja(codigo)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE entradas_parcelas (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	codigo_entrada BIGINT(20),
	codigo_parcela_entrada BIGINT(20),
	FOREIGN KEY (codigo_entrada) REFERENCES entrada(codigo),
	FOREIGN KEY (codigo_parcela_entrada) REFERENCES parcela_entrada(codigo)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;