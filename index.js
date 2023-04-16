let El = document.getElementById("count")
let Elt = document.getElementById("save-el")
let count = 0

function increment(){
    count += 1
    El.textContent = count
}
function decrement(){
    count -= 1
    El.textContent = count
}
function save(){
    let prev = count + " - "
    Elt.textContent += prev
    El.textContent = 0
    count = 0
}
