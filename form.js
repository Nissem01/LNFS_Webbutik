

const form = document.getElementById("order");
const nameInput = document.getElementById("name");
const nameError = document.getElementById("nameError");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");
const result = document.getElementById("result")


function displayError (el, message) {
    el.innerHTML = message
}

function clearError(el){
    el.innerHTML = ""
}

function validateForm(){
    return false
}

form.addEventListener("submit", function(event) {event.preventDefault()

result.innerHTML=""

if (validateForm()){
    result.innerHTML= "Your order will be sent shortly"
    result.className = "ok"
}else {
    result.innerHTML = "fix errors"
    result.className ="error"
}
} )

function validateName(){
    let
}