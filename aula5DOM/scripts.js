const guests = document.querySelector("ul")
const newGuest = document.createElement("li")
const guestName = document.createElement("span")

guestName.textContent = "Arthur"

/*
    o append adiciona apos o ultimo filho e pode adicinar mais de um
    newGuest.append(guestName)
*/

/*
    o prepend adiciona antes do primeiro filho
    newGuest.prepend(guestName)
*/

// o appenChild adicina apenas um elemento apos o ultimo
newGuest.appendChild(guestName)



guests.append(newGuest)
newGuest.classList.add("guest")




