const previous = document.getElementById("previous");
const next = document.getElementById("next");
let activeStep = 1;
let maxStep = 4;
let minStep = 1;

checkButtonState();

next.addEventListener("click", onNextClick);
previous.addEventListener("click", onPreviousClick);

function onNextClick() {
  activeStep += 1;
  document.querySelector(`[data-step="${activeStep}"]`).classList.add("active");

  checkButtonState();
}

function onPreviousClick() {
  document
    .querySelector(`[data-step="${activeStep}"]`)
    .classList.remove("active");
  activeStep -= 1;

  checkButtonState();
}

function checkButtonState() {
  next.disabled = false;
  previous.disabled = false;

  if (activeStep === maxStep) {
    next.disabled = true;
  }

  if (activeStep === minStep) {
    previous.disabled = true;
  }
}
