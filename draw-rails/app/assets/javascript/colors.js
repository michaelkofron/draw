
let red = document.getElementById("red")
let green = document.getElementById("green")
let blue = document.getElementById("blue")
let yellow = document.getElementById("yellow")
let orange = document.getElementById("orange")
let black = document.getElementById("black")
let purple = document.getElementById("purple")

let hidden = document.getElementById("hidden")

let array = [red, green, blue, yellow, orange, black, purple]

let colorArray = ["#ff0000", "#008000", "#0000ff", "#ffff00", "#ffa500", "#000000", "#800080"]

red.addEventListener("click", function() {
    hidden.innerText = colorArray[0]
})

green.addEventListener("click", function() {
    hidden.innerText = colorArray[1]
})

blue.addEventListener("click", function() {
    hidden.innerText = colorArray[2]
})

yellow.addEventListener("click", function() {
    hidden.innerText = colorArray[3]
})

orange.addEventListener("click", function() {
    hidden.innerText = colorArray[4]
})

black.addEventListener("click", function() {
    hidden.innerText = colorArray[5]
})

purple.addEventListener("click", function() {
    hidden.innerText = colorArray[6]
})

//unknown problem with undefined values in for loop, figure out later and recode, this works for now but is ugly.