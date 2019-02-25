CREATE TABLE caixa (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(100),
	data_fechamento DATE,
	data_abertura DATE,
	valor_receitas DECIMAL(10,2),
	valor_despesas DECIMAL(10, 2),
	saldo_fechamento DECIMAL(10,2),
	saldo_abertura DECIMAL(10,2),
	codigo_igreja BIGINT(20),
	FOREIGN KEY (codigo_igreja) REFERENCES igreja(codigo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
