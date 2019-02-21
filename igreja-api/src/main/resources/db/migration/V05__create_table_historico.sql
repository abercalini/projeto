CREATE TABLE historico (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(100),
	usuario VARCHAR(50),
	data DATE,
	codigo_igreja BIGINT(20),
	FOREIGN KEY (codigo_igreja) REFERENCES igreja(codigo)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
