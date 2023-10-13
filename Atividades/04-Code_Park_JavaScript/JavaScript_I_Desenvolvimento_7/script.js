let tituloH1 = document.createElement("h1")

tituloH1.innerText = "Produtos a venda"
tituloH1.id = "titulo"

let conteudo = document.createElement("div")
conteudo.innerHTML = `
<h2>Caneta BIC Azul</h2>
    <br>
    <img src='img/bic.jpg'>
    <p>Caneta esferográfica clássica e favorita em milhares de lares, escritórios e escolas no mundo. Possui corpo hexagonal que assegura o conforto na escrita e transparente para visualização da tinta. Tinta de alta qualidade, que seca rapidamente evitando borrões na escrita.</p>
    <br>
    <p><strong>R$ 1,50</strong></p>
`

let body = document.querySelector("body")
body.appendChild(tituloH1)
body.appendChild(conteudo)