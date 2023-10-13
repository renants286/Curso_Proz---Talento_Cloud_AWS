const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");
const linkPerfilDados = document.getElementById("link-perfil-dados")

linkPerfil.addEventListener ("mouseover", () => {
  navPerfil.style.display = "block"
})

document.addEventListener ("mouseover", ( )=> {
  navPerfil.style.display = "block"
})

document.addEventListener ("keyup", (e) => {
  console.log (e.key)
  console.log (e.code)

  if (e.code == "Digit1" || e.code == "Numpad1") {
    console.log ("Vc pressionou a tecla 1!")
    if (navPerfil.style.display == "block") {
      linkPerfilDados.click()
    } else {
      navPerfil.style.display = "block"
    }
  }

  if (e.code == "Escape") {
    console.log ("Vc pressionou a tecla Esc")
    navPerfil.style.display = "none"
  }
})

