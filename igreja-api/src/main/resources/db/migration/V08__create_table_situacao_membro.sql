CREATE TABLE situacao_membro(
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	situacao VARCHAR(50) NOT NULL,
	codigo_igreja BIGINT(20),
	FOREIGN KEY (codigo_igreja) REFERENCES igreja(codigo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
