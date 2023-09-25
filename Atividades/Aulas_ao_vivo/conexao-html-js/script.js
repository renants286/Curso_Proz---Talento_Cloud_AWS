//console.log('Olá mundo!')

const h3 = document.getElementById('h3')
//console.log(h3)

const listaRedes = document.getElementsByClassName('lista_redes')
//console.log(listaRedes)


const post02 = document.getElementById('post02')
//console.log(post02)

const formulario = document.getElementById('formulario')
//console.log(formulario)

const post = document.getElementsByClassName('post')
//console.log(post)


const h1 = document.querySelector('h1')
//console.log(h1)

const h1B = document.querySelectorAll('h1')
//console.log(h1B)

const section = document.querySelector('section')
//console.log(section)

const sections = document.querySelectorAll('section')
//console.log(sections)

const postTexto = document.querySelector('.post-texto')
//console.log(postTexto)

const postTextoB = document.querySelectorAll('.post-texto')
//console.log(postTextoB)

const h2 = document.querySelector('h2')
//console.log(h2)

const h2B = document.querySelectorAll('h2')
//console.log(h2B)

const postAutor = document.querySelector('.post-autor')
//console.log(postAutor)

const postAutorB = document.querySelectorAll('.post-autor')
//console.log(postAutorB)

const formularioB = document.querySelector('#formulario')
//console.log(formularioB)

const formularioC = document.querySelectorAll('#formulario')
//console.log(formularioC)


/////////////////////////////////////////////////////////////////////////////
//MATERIAL EXTRA

let listaRedesFooter = document.querySelectorAll("footer .lista_redes li")
//console.log(listaRedesFooter)

for(let i = 0; i < listaRedesFooter.length; i++) {
    console.log(listaRedesFooter[i]);
}
