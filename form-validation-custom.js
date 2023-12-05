// TODO
const form = document.getElementById("connect-form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");

const validLength = (input, min) => {
  if (input.value.trim().length >= min) {
    input.parentElement.classList.remove("invalid");
    input.nextElementSibling.textContent = "";
  } else {
    input.parentElement.classList.add("invalid");
    input.nextElementSibling.textContent = `Please enter at least ${min} characters.`;
    console.log("Bad Input");
  }
};

const validEmail = (input) => {
  const emailFormat = /\w+@\w+\.\w+/;

  if (emailFormat.test(input.value.trim())) {
    input.parentElement.classList.remove("invalid");
    input.nextElementSibling.textContent = "";
  } else {
    input.parentElement.classList.add("invalid");
    input.nextElementSibling.textContent = "Please enter a valid email.";
    console.log("Bad Input");
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validLength(firstName, 3);
  validLength(lastName, 3);
  validEmail(email);
});
