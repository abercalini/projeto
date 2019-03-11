CREATE TABLE tipo_entrada (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(50),
	codigo_igreja BIGINT(20),
	FOREIGN KEY (codigo_igreja) REFERENCES igreja(codigo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;