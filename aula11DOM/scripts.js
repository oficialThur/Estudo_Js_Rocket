const input = document.querySelector("input")

input.addEventListener("inout", () => {
    const value = input.value

    const regerx = /\D=/g

    const isValid = regerx.test(value)
    console.log(isValid)
})

