CREATE TABLE igreja (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
	cnpj VARCHAR(30),
	telefone VARCHAR(30),
	responsavel VARCHAR(50),
	tipo_igreja VARCHAR(50),
	porcentagem_contribuicao VARCHAR(20),
	email VARCHAR(40),
	rua VARCHAR(50),
	numero VARCHAR(10),
	bairro VARCHAR(50),
	estado VARCHAR(20),
	cidade VARCHAR(40),
	cep VARCHAR(20)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO igreja (nome, cnpj, telefone, responsavel, tipo_igreja, porcentagem_contribuicao, email, rua, numero, bairro, estado, cidade, cep) values ('Igreja teste', '11111', '999999',
'Alisson', 'sede', '15%', 'teste@teste.com', 'teste', '30', 'teste', 'teste', 'teste', '86825970');



