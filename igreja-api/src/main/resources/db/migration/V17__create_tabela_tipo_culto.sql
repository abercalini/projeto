CREATE TABLE tipo_culto (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(100) NOT NULL,
	objetivo VARCHAR(100) NOT NULL,
	codigo_igreja BIGINT(20),
	FOREIGN KEY (codigo_igreja) REFERENCES igreja(codigo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;