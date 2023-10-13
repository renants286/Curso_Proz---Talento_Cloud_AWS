// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

/* // Mostrar popup de campo obrigatório
usernameInput.addEventListener('focus', function(){
    usernameLabel.classList.add('required-popup')
})

// Ocultar popup de campo obrigatório
usernameInput.addEventListener('blur', function(){
    usernameLabel.classList.remove('required-popup')
}) */

// Validar valor do input
usernameInput.addEventListener('change', function(e){
    let valor = e.target.value
    if(valor.length < 3) {
        usernameInput.classList.remove('correct')
        usernameInput.classList.add('error')
        usernameHelper.classList.add('visible')
        usernameHelper.innerText = 'Seu username deve ter 3 ou mais caracteres'
    } else {
        usernameInput.classList.remove('error')
        usernameHelper.classList.remove('visible')
        usernameInput.classList.add('correct')
    }

    if(valor.length == null || valor.length == ""){
        usernameInput.classList.remove('correct')
        usernameInput.classList.remove('error')
        usernameHelper.classList.remove('visible')
    }
})

// Validar Email
let emailInput = document.getElementById('email')
let emailLabel = document.querySelector('label[for="email"]')
let emailHelper = document.getElementById('email-helper')

function mostraPopup(input, label){
    //Mostrar popup
    input.addEventListener('focus', function(){
        label.classList.add('required-popup')
    })

    //Ocultar popup
    input.addEventListener('blur', function(){
        label.classList.remove('required-popup')
    })
}

mostraPopup(emailInput, emailLabel)
mostraPopup(usernameInput,usernameLabel)

emailInput.addEventListener('change', function(e){
    let valor = e.target.value

    if(valor.includes('@') && (valor.includes('.com') || valor.includes('.gov') || valor.includes('.io'))){
        emailInput.classList.remove('error')
        emailHelper.classList.remove('visible')
        emailInput.classList.add('correct')
    } else {
        emailInput.classList.add('error')
        emailHelper.classList.add('visible')
        emailInput.classList.remove('correct')
        emailHelper.innerText = 'Email inválido'
    }

    if(valor.length == null || valor.length == ""){
        emailInput.classList.remove('error')
        emailInput.classList.remove('correct')
        emailHelper.classList.remove('visible')
        emailHelper.innerText.remove = 'Email inválido'
    }
})