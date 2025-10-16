// visualizar o conteudo do document.

// console.log(document)

// obter o title com console 

// console.log(document.title)

// acessar um documento por id (SELETOR ID)

const guest = document.getElementById("guest-2")

console.log(guest)

// mostra as propriedades do obijeto 

// console.dir(guest)

// acessar um documento por class (SELETOR CLASS)


const guestByclass = document.getElementsByClassName("guest")

console.log(
    guestByclass
)

// seleciuonar litas de elementos pela tag 

const guestTag = document.getElementsByTagName("li")

console.log(guestTag)