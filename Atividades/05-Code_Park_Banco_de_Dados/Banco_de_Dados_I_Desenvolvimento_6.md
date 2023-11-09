* INSTRUÇÃO

De acordo com os comandos aprendidos, programe códigos SQL para criar um banco de dados chamado ESCOLA e deixe-o pronto para o uso. Depois, pesquise qual é o comando utilizado para inserir uma tabela no banco de dados e siga as instruções:

1. crie uma tabela chamada ALUNO;  
2. defina os atributos da tabela;
3. adicione a chave primária de nome ID (identificador);
4. adicione um atributo nome do tipo varchar;
5. adicione um atributo e-mail do tipo varchar;
6. adicione um atributo endereço do tipo varchar.


* RESOLUÇÃO:

```sql
CREATE DATABASE IF NOT EXISTS DATAFILE 'ESCOLA';

CREATE TABLE ALUNO (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(24) not NULL,
  email VARCHAR(24) not NULL,
  endereco VARCHAR(24)
);

INSERT INTO ALUNO (nome, email, endereco) VALUES
  ('João Carlos', 'Jcarlos@gmail.com', 'Rua 13 de maio'),
  ('José Vitor', 'Jvitor@gmail.com', 'Rua da Saudade'),
  ('Paulo André', 'Pandr@gmail.com', 'Rua do Sol');
  ```