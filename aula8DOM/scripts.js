const ul = document.querySelector("ul")

ul.addEventListener("scroll", () => {

    if (ul.scrollTop > 300) {

        ul.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }


})