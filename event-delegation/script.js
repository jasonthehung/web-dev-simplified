const addBoxButton = document.querySelector("[data-add-box]")
const grid = document.querySelector(".grid")
const boxes = document.querySelectorAll(".box")

addBoxButton.addEventListener("click", () => {
  const box = document.createElement("div")
  box.classList.add("box")
  grid.appendChild(box)
})

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    box.classList.toggle("clicked")
  })
})