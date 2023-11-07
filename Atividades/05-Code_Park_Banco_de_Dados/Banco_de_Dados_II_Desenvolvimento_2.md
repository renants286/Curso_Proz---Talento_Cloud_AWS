Crie um banco de dados, adicione tabelas e determine quais são os atributos de cada uma. Em seguida, execute um trigger que se relacione com algum comando, como insert, select, delete ou update.

CREATE DATABASE IF NOT EXISTS DATAFILE 'LojaInformatica';
USE LojaInformatica

CREATE TABLE cliente (
    ID SERIAL PRIMARY KEY,
    nome VARCHAR(16) not NULL,
    idade INT,
    cidade VARCHAR(24) not NULL
);

CREATE TABLE pedido (
    ID SERIAL PRIMARY KEY,
    item VARCHAR(48) NOT NULL,
    quantidade INT NOT NULL,
    fk_id_cliente INT NOT NULL,
    CONSTRAINT fk_cliente FOREIGN KEY (fk_id_cliente) REFERENCES cliente(id)
);

INSERT INTO cliente (nome, idade, cidade) VALUES
    ('João Alves', 48, 'São Paulo'),
    ('Roberto Garcia', 36, 'Rio de Janeiro'),
    ('Dario Rubens', 39, 'Curitiba'),
    ('Julia Lopes', 28, 'Recife'),
    ('Rebeca Giglio', 54, 'Manaus');

INSERT INTO pedido (item, quantidade, fk_id_cliente) VALUES
    ('teclado', 1, 4),
    ('mouse', 2, 4),
    ('monitor', 8, 3),
    ('teclado', 1, 1),
    ('mousepad', 4, 2);


################################################################
*EXEMPLO DE TRIGGER:

CREATE TRIGGER after_pedido_insert
AFTER INSERT ON pedido
FOR EACH ROW
BEGIN
    INSERT INTO pedido_log (pedido_id, action_type, action_timestamp)
    VALUES (NEW.ID, 'INSERT', NOW());
END;

Este trigger será acionado após a inserção de um novo pedido na tabela "pedido", e irá inserir um registro correspondente na tabela "pedido_log", que (em teoria) foi previamente criada para armazenar esses logs.
