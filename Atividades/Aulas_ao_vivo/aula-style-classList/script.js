const h2 = document.querySelector('h2')
h2.style.color = 'red'
h2.style.fontSize = '40px'

const button = document.querySelector('button')
button.style.backgroundColor = 'yellow'
button.style.fontSize = '15px'

//const userNameInput = document.querySelector('#login-usuario')
//userNameInput.classList.add('error')

const userNameInput = document.querySelector('#login-usuario')
userNameInput.classList.add('correct')

const passInput = document.querySelector('#login-senha')
passInput.classList.add('error')

const errorMessage = document.querySelectorAll('.error-text')
errorMessage[1].classList.add("visible")

//OUTRA FORMA DE FAZER
//const errorMessage = document.querySelectorAll('.error-text')[1]
//errorMessage.classList.add("visible")
