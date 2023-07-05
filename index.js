const clickHandler = document.querySelector('#increment')
const resetBtn= document.querySelector('#reset')
const textArea = document.querySelector('#text-area')

let count = 0
let allClicks = []
let resetTimeout


function display(){
    clearTimeout(resetTimeout)
    count++
    let clicks = `Click ${count}`
    allClicks.push(clicks)
    textArea.textContent = allClicks.join(', ')
    resetTimeout = setTimeout(reset, 5000)
}
function reset () {
    textArea.textContent = 0
    count = 0
    allClicks = []
}
resetTimeout = setTimeout(reset, 5000)   

clickHandler.addEventListener('click', display )
resetBtn.addEventListener('click', reset )

