const input = document.querySelector("input")

const form = document.querySelector("form")

form.onsubmit = (event) => {
    event.preventDafault()

    const valeu = input.value
    const regexHasNumber = /\d=/g

    if (regexHasNumber.test(valeu)) {
        alert("O texto contem numero. Por favor, digite corretamente")
    }
    else {
        alert("cadastro efetudado")
    }
}