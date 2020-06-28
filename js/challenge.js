let running = true
const secondPassed = document.getElementById("counter")

const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const heart = document.getElementById("heart")
const submit = document.getElementById("submit")

function increaseCounter(){
  let number = parseInt(secondPassed.innerHTML)
  if (running === true) {
  secondPassed.innerText = number += 1 
}}

const increase = setInterval(increaseCounter, 1000)


function addAndSubtract() {
  plus.addEventListener("click", () => {
    let number = parseInt(secondPassed.innerHTML)
    secondPassed.innerHTML = number += 1
  })
  minus.addEventListener("click", () => {
    let number = parseInt(secondPassed.innerHTML)
    secondPassed.innerHTML = number -= 1
  })
}


function hearted(){
  const likes = document.querySelector("ul")
  let clicked = 1
  heart.addEventListener("click", () => {
    let number = parseInt(secondPassed.innerHTML)
    let numberExists = document.getElementById(`${number}`)
    if (numberExists) { 
      clicked ++
      numberExists.innerHTML = `${number} has been liked ${clicked} times`
    } else {
      clicked = 1
      likes.innerHTML += `<li id='${number}'> ${number} has been liked </li>`
    }
  })

}

function paused(){
  const pause = document.getElementById("pause")
  pause.addEventListener("click", () =>{
    if (pause.innerText === "pause") {
      pause.innerText = "resume"
      plus.disabled = true
      minus.disabled = true 
      heart.disabled = true 
      submit.disabled = true
      running = false
    } else {
      plus.disabled = false
      minus.disabled = false 
      heart.disabled = false 
      submit.disabled = false
      running = true
      pause.innerText = "pause"
    }
  })
}

function submitted() {
  const list = document.getElementById("list")
  
  submit.addEventListener("click", (event) => {
    event.preventDefault()
    let comment = document.getElementById("comment-input")
    list.innerHTML += `<li>${comment.value}</li>`
    comment.value = ""
  })
}




submitted()
paused()
hearted()
addAndSubtract()