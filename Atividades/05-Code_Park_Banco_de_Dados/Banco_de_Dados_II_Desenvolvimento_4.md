*INSTRUÇÕES:
Uma loja tem um banco de dados que contém todo o controle de vendas de produtos e de cadastro de clientes. Pensando nisso, crie uma função para somar todos os clientes que foram cadastrados na loja durante um dia.

*RESOLUÇÃO:

```sql
CREATE FUNCTION ClientsByDay(data_cadastro DATE) RETURNS INT
BEGIN
    DECLARE totalClientes INT;
    SELECT COUNT(*) INTO totalClientes
    FROM tabela_de_clientes
    WHERE DATE(data_cadastro) = data_cadastro;
    RETURN totalClientes;
END;
```

```sql
SELECT ClientsByDay('2023-11-01') AS TotalClientesCadastrados;
```
