CREATE TABLE usuario (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL,
	senha VARCHAR(100) NOT NULL,
	codigo_igreja BIGINT(20),
	FOREIGN KEY (codigo_igreja) REFERENCES igreja(codigo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE permissao (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	descricao varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE usuario_permissao (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	codigo_usuario BIGINT(20),
	codigo_permissao BIGINT(20),
    	FOREIGN KEY (codigo_usuario) REFERENCES usuario(codigo),
    	FOREIGN KEY (codigo_permissao) REFERENCES permissao(codigo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO usuario(codigo, nome, email, senha, codigo_igreja) VALUES (1,'Alisson','bercalini_alisson@hotmail.com','$2a$10$Jwn3ocGTh9/9m3boD4cbGukgxw6B7vJs.hKYB/wXb1X.H4NZVtuAO', 1);
INSERT INTO usuario(codigo, nome, email, senha, codigo_igreja) VALUES (2,'Cristiano','cristiano_cristiano@hotmail.com','$2a$10$ekJFGXw6IwloIoPr3EwLKerlqwTKJ7z0suiOrRsPyOZu4o7e6ORZS', 1);
INSERT INTO usuario(codigo, nome, email, senha, codigo_igreja) VALUES (3,'Nayla','nayla_nayla@hotmail.com','$2a$10$ts4Jr81iMEKT84mPV1hzjua/YWpTYZsmwmfARXqECtBNwm95FGJ96', 1);

INSERT INTO permissao(codigo, descricao) VALUES (1,'ROLE_CADASTRAR_OBJETO');
INSERT INTO permissao(codigo, descricao) VALUES (2,'ROLE_PESQUISAR_OBJETO');
INSERT INTO permissao(codigo, descricao) VALUES (3,'ROLE_EDITAR_OBJETO');
INSERT INTO permissao(codigo, descricao) VALUES (4,'ROLE_EXCLUIR_OBJETO');

 


