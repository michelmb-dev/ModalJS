modal = document.querySelector(".modal")
button = document.querySelector(".btn")
close = document.querySelector(".close")

const background = document.createElement("div")
background.classList.add("modal__bg")
document.body.appendChild(background)

button.addEventListener("click", () => {
	modal.classList.add("is--open")
	background.classList.add("is--open")
})

close.addEventListener("click", () => {
	modal.classList.remove("is--open")
	background.classList.remove("is--open")
})
