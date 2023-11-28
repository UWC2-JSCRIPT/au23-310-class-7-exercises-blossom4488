// TODO
const optionPicked = document.querySelector("#contact-kind");
const jobTitle = document.querySelector(".job-title");
const companyWeb = document.querySelector(".company-website");
const codingLanguage = document.querySelector(".coding-language");
const form = document.getElementById("connect-form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const message = document.getElementById("message");

optionPicked.addEventListener("change", () => {
  document.getElementById("job-title").value = "";
  document.getElementById("company-website").value = "";
  document.getElementById("coding-language").value = "";

  if (optionPicked.value === "job") {
    codingLanguage.classList.add("hidden");
    jobTitle.classList.remove("hidden");
    companyWeb.classList.remove("hidden");
  } else {
    jobTitle.classList.add("hidden");
    companyWeb.classList.add("hidden");
    codingLanguage.classList.remove("hidden");
  }
});

const validLength = (input, min) => {
  if (input.value.trim().length >= min) {
    input.parentElement.classList.remove("invalid");
    input.nextElementSibling.textContent = "";
  } else {
    input.parentElement.classList.add("invalid");
    input.nextElementSibling.textContent = `Please enter at least ${min} characters.`;
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

const validMessage = (input, min) => {
  if (input.value.trim().length >= min) {
    input.parentElement.classList.remove("invalid");
    input.nextElementSibling.textContent = "";
  } else {
    input.parentElement.classList.add("invalid");
    input.nextElementSibling.textContent = `Please enter at least ${min} characters.`;
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validLength(firstName, 3);
  validLength(lastName, 3);
  validEmail(email);
  validMessage(message, 10);
});
