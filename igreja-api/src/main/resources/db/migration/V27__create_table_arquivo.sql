CREATE TABLE arquivo (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	arquivo blob,
	nome_arquivo VARCHAR(50),
	descricao VARCHAR(50),
	data DATE,
	codigo_igreja BIGINT(20),
	FOREIGN KEY (codigo_igreja) REFERENCES igreja(codigo)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;