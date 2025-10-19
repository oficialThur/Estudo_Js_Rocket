const from = document.querySelector("form")

//onsubimt e modo mais clean de do addEventListener, 
// a diferença e que onsubmit ele sempre executa o ultimo onsubmit criado   
from.onsubmit = (event) => {
    event.preventDefault()
}