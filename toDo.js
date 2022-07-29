let submitEl = document.getElementById("submit-el")
let olEl = document.getElementById("ol-el")
let inputEl = document.getElementById("input-el")

function submit(){
olEl.innerHTML += "<li>" + inputEl.value /*+ "<button>Done</button>"*/ + "</li>"
inputEl.value = " "
}

function clear(){
olEl.innerHTML = " ";
}