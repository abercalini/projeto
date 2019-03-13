CREATE TABLE geracao (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	horario VARCHAR(50),
	dias VARCHAR(40),
	data DATE,
	endereco VARCHAR(50),
	estado VARCHAR(30),
	cidade VARCHAR(50),
	local VARCHAR(50),
	codigo_igreja BIGINT(20),
	FOREIGN KEY (codigo_igreja) REFERENCES igreja(codigo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;