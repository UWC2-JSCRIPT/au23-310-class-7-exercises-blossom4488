// TODO

const optionPicked = document.querySelector("#contact-kind");
const businessType = document.querySelector(".business-type");
const numofComp = document.querySelector(".num-of-computers");
const operatingSystem = document.querySelector(".operating-system");
const techIssue = document.querySelector(".tech-issue");

optionPicked.addEventListener("change", () => {
  document.getElementById("business-type").value = "";
  document.getElementById("num-of-computers").value = "";
  document.getElementById("operating-system").value = "";
  document.getElementById("tech-issue").value = "";
  if (optionPicked.value === "business") {
    operatingSystem.classList.add("hidden");
    techIssue.classList.add("hidden");
    businessType.classList.remove("hidden");
    businessType.addEventListener("change", () => {
      numofComp.classList.remove("hidden");
    });
  } else {
    businessType.classList.add("hidden");
    numofComp.classList.add("hidden");
    operatingSystem.classList.remove("hidden");
    operatingSystem.addEventListener("change", () => {
      techIssue.classList.remove("hidden");
    });
  }
});
