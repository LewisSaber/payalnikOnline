const payalnikCounter = document.getElementById("payalnikCounterValue")
const addPayalnikButton = document.getElementById("addPayalnik")

let payalniks = 0

function updateCounter(){
    payalnikCounter.innerText = payalniks
}

function addPayalnik(){
    payalniks++
    updateCounter()
}

addPayalnikButton.onmousedown = addPayalnik