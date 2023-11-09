*INSTRUÇÕES:
Desenvolva um banco de dados e relacione tabelas através de chaves estrangeiras ou nomes de colunas iguais. Siga as instruções:
1. Crie uma base de dados; 
2. Crie tabelas nessa base de dados;
3. Em cada tabela, adicione atributos;
4. Insira dados em cada tabela;
5. Utilize os comandos Joins para realizar consultas nas tabelas.

*RESOLUÇÃO:

1.
```sql
CREATE DATABASE IF NOT EXISTS DATAFILE 'LojaInformatica';
USE LojaInformatica
```

################################################################

2. e 3.
```sql
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
```

################################################################

4.
```sql
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
```

################################################################

5.
```sql
SELECT cliente.nome, pedido.item
FROM pedido
    CROSS JOIN cliente

RESULTADO DA CONSULTA:
"João Alves"	"teclado"
"Roberto Garcia"	"teclado"
"Dario Rubens"	"teclado"
"Julia Lopes"	"teclado"
"Rebeca Giglio"	"teclado"
"João Alves"	"mouse"
"Roberto Garcia"	"mouse"
"Dario Rubens"	"mouse"
"Julia Lopes"	"mouse"
"Rebeca Giglio"	"mouse"
"João Alves"	"monitor"
"Roberto Garcia"	"monitor"
"Dario Rubens"	"monitor"
"Julia Lopes"	"monitor"
"Rebeca Giglio"	"monitor"
"João Alves"	"teclado"
"Roberto Garcia"	"teclado"
"Dario Rubens"	"teclado"
"Julia Lopes"	"teclado"
"Rebeca Giglio"	"teclado"
"João Alves"	"mousepad"
"Roberto Garcia"	"mousepad"
"Dario Rubens"	"mousepad"
"Julia Lopes"	"mousepad"
"Rebeca Giglio"	"mousepad"

SELECT cliente.nome, pedido.item
FROM pedido
    INNER JOIN cliente ON (cliente.id = pedido.fk_id_cliente)

RESULTADO DA CONSULTA:
"Julia Lopes"	"teclado"
"Julia Lopes"	"mouse"
"Dario Rubens"	"monitor"
"João Alves"	"teclado"
"Roberto Garcia"	"mousepad"

SELECT cliente.nome, pedido.item
FROM cliente
    LEFT OUTER JOIN pedido ON (pedido.fk_id_cliente = cliente.id)

RESULTADO DA CONSULTA:
"Julia Lopes"	"teclado"
"Julia Lopes"	"mouse"
"Dario Rubens"	"monitor"
"João Alves"	"teclado"
"Roberto Garcia"	"mousepad"
"Rebeca Giglio"	"null"
```


