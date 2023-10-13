let titulo = document.getElementById("titulo")
let elementoUl = document.querySelector("ul")
let elementoAncora = document.querySelector("a")
let listaOrdenada = document.getElementById("lista-ordenada")

titulo.innerText = "Título adicionado via JS"

elementoAncora.innerText = "Proz Educação"

elementoUl.innerHTML = `
<li>Elemento simples adicionado via JS 1</li>
<li>Elemento simples adicionado via JS 2</li>
<li>Elemento simples adicionado via JS 3</li>
`

listaOrdenada.innerHTML = `
<a href="https://google.com">Google</a>
<a href="https://wikipedia.org">Wikipedia</a>
<a href="https://youtube.com">Youtube</a>
`