*INSTRUÇÃO:
Uma empresa de vendas tem um banco de dados com informações sobre os seus produtos. Ela precisa criar um relatório que faça um levantamento diário da quantidade de produtos comprados por dia. Para ajudar a empresa, crie um procedure para agilizar esse processo.


*RESOLUÇÃO:

```sql
CREATE PROCEDURE DailyReportProducts()
BEGIN
    SELECT
        DATE(data_compra) AS DataCompra,
        COUNT(*) AS QtdProdsComprados
    FROM
        tabela_de_compras
    GROUP BY
        DataCompra;
END;
```
```sql
CALL DailyReportProducts()
```