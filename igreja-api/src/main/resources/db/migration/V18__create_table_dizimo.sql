CREATE TABLE dizimo (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	forma_de_pagamento VARCHAR(50),
	valor DECIMAL(10,2),
	codigo_membro BIGINT(20),
	codigo_culto BIGINT(20),
	codigo_igreja BIGINT(20),
    	FOREIGN KEY (codigo_membro) REFERENCES membro(codigo),
	FOREIGN KEY (codigo_culto) REFERENCES tipo_culto(codigo),	
	FOREIGN KEY (codigo_igreja) REFERENCES igreja(codigo)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
