CREATE TABLE fornecedor(
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(100) NOT NULL,
	tipo_pessoa VARCHAR(50),
	cnpj VARCHAR(50),
	cpf VARCHAR(50),
	colaborador boolean,
	rg varchar(50),
	cargo VARCHAR(50),
	inss DECIMAL(10,2),
	valor_renda DECIMAL(10,2),
	data_admissao DATE,
	data_desligamento DATE,
	email VARCHAR(100),
	telefone VARCHAR(50),
	celular VARCHAR(50),
	rua VARCHAR(50),
	numero VARCHAR(20),
	bairro VARCHAR(50),
	estado VARCHAR(15),
	cidade VARCHAR(50),
	cep VARCHAR(50),
	codigo_igreja BIGINT(20),
	FOREIGN KEY (codigo_igreja) REFERENCES igreja(codigo)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
