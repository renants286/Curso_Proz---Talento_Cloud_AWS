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