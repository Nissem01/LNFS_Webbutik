const form = document.getElementById("order");
const nameInput = document.getElementById("name");
const nameError = document.getElementById("nameError");

const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");

const numberInput = document.getElementById("phonenumber");
const numberError = document.getElementById("numberError");

const streetInput = document.getElementById("streetName");
const streetError = document.getElementById("streetError");

const zipcodeInput = document.getElementById("zipcode");
const zipcodeError = document.getElementById("zipcodeError");

const cityInput = document.getElementById("city");
const cityError = document.getElementById("cityError");

const result = document.getElementById("result");

nameInput.addEventListener("blur", validateName);
emailInput.addEventListener("blur", validateEmail);
numberInput.addEventListener("blur", validateNumber);
streetInput.addEventListener("blur", validateStreet);
zipcodeInput.addEventListener("blur", validateZipcode);
cityInput.addEventListener("blur", validateCity);

function displayError(el, message) {
  el.innerHTML = message;
}

function clearError(el) {
  el.innerHTML = "";
}

function validateName() {
  let value = nameInput.value.trim();
  if (value.length < 2) {
    displayError(nameError, "Minimum 2 letters");
    return false;
  }
  clearError(nameError);
  return true;
}

function validateEmail() {
  let value = emailInput.value.trim();
  const check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!check.test(value) || value.length > 50) {
    displayError(emailError, "Enter a valid mail");
    return false;
  }
  clearError(emailError);
  return true;
}

function validateNumber() {
  let value = numberInput.value.trim();
  const check = /^[0-9\-()+]{1,20}$/;

  if (!check.test(value)) {
    displayError(numberError, "Enter a valid phonenumber, max 20 tokens");
    return false;
  }
  clearError(numberError);
  return true;
}

function validateStreet() {
  let value = streetInput.value.trim();
  if (value.length < 2 || value.length > 50) {
    displayError(streetError, "Minimum 2 letters");
    return false;
  } else {
    clearError(streetError);
    return true;
  }
}

function validateZipcode() {
  let value = zipcodeInput.value.trim();
  const check = /^\d{5}$/;

  if (!check.test(value)) {
    displayError(zipcodeError, "Enter a valid postnumber, 5 tokens");
    return false;
  }
  clearError(zipcodeError);
  return true;
}

function validateCity() {
  let value = cityInput.value.trim();
  if (value.length < 2 || value.length > 20) {
    displayError(cityError, "Minimum 2 letters");
    return false;
  } else {
    clearError(cityError);
    return true;
  }
}

function validateForm() {
  let okName = validateName();
  let okEmail = validateEmail();
  let okNumber = validateNumber();
  let okStreet = validateStreet();
  let okZipcode = validateZipcode();
  let okCity = validateCity();
  return okName && okEmail && okNumber && okStreet && okZipcode && okCity;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  result.innerHTML = "";

  if (validateForm()) {
    setTimeout(() => {
      window.location.href = "receipt.html";
    }, 1500);
  } else {
    result.innerHTML = "fix errors";
    result.className = "text-danger";
  }
});

const checkbox = document.getElementById("newsletter");
checkbox.addEventListener("change", function () {
  if (!checkbox.checked) {
    setTimeout(() => {
      checkbox.checked = true;
    }, 1000);
  }
});
