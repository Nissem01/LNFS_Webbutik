

const form = document.getElementById("order");
const nameInput = document.getElementById("name");
const nameError = document.getElementById("nameError");

const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");

const numberInput = document.getElementById("phonenumber");
const numberError = document.getElementById("numberError");

const streetInput = document.getElementById("streetName");
const streetError = document.getElementById("streetError");

const postnumberInput = document.getElementById("postnumber");
const postnumberError = document.getElementById("postnumberError");

const cityInput = document.getElementById("city");
const cityError = document.getElementById("cityError");

const result = document.getElementById("result")


function displayError (el, message) {
    el.innerHTML = message
}

function clearError(el){
    el.innerHTML = ""
}



function validateName(){
    let value = nameInput.value.trim()
    if (value.length < 2){
        displayError(nameError, "Minimum 2 letters")
        return false
    }
    clearError(nameError)
    return true
}

function validateEmail(){
    let value = emailInput.value.trim()
    if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))){
        displayError(emailError, "Enter a valid mail")
        return false
    }
    clearError(emailError)
    return true
}

function validateNumber(){
    let value = numberInput.value.trim()
    let regrex = /^[0-9\-() +]{1,20}$/

    if (!regrex.test(value)){
        displayError(numberError, "Enter a valid phonenumber, max 20 tokens")
        return false
    }
    clearError(numberError)
    return true
}

function validateStreet(){
    let value = streetInput.value.trim()
    if (value.length < 2 ){
        displayError(streetError, "Minimum 2 letters")
        return false
    } else if( value.length > 50){
        displayError(streetError, "Max 50 letters")
        return false
    }else{
    clearError(streetError)
    return true 
}
}

function validatePostnumber(){
    let value = postnumberInput.value.trim()
  

    if (value.length > 5 || value.length < 5){
        displayError(postnumberError, "Enter a valid postnumber, 5 tokens")
        return false
    }
    clearError(postnumberError)
    return true
}

function validateCity(){
    let value = cityInput.value.trim()
    if (value.length < 2 ){
        displayError(cityError, "Minimum 2 letters")
        return false
    } else if( value.length > 50){
        displayError(cityError, "Max 20 letters")
        return false}
        else{
    clearError(cityError)
    return true}
}

function validateForm (){
    let okName = validateName()
    let okEmail = validateEmail()
    let okNumber = validateNumber()
    let okStreet = validateStreet()
    let okPostnumber = validatePostnumber()
    let okCity = validateCity()
    return okName && okEmail && okNumber && okStreet && okPostnumber && okCity
}

if (validateForm()){
    result.innerHTML= "Your order will be sent shortly"
    result.className = "text-success"
}else {
    result.innerHTML = "fix errors"
    result.className ="text-danger"
}

form.addEventListener("submit", function(event) {event.preventDefault()

result.innerHTML=""

})