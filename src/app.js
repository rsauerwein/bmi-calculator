const unitSelection = document.querySelectorAll(".calculator-radio");
const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");
const bmiResult = document.querySelector(".result span");
const classification = document.querySelector(".classification");
const idealWeight = document.querySelector(".ideal-weight");

let mode = "metric";

let weight = 0;
let height = 0;

function handleUnitChange(e) {
  mode = e.srcElement.value;

  // todo change input form
  if (mode === "imperial") {
  } else {
  }
}

function handleHeightInput(e) {
  height = heightInput.value;
  updateResult();
}

function handleWeightInput(e) {
  weight = weightInput.value;
  updateResult();
}

function updateResult() {
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    console.log("skip", height, weight);
    return;
  }

  let result;
  if (mode === "imperial") {
    // todo
    result = 0;
  } else {
    result = (weight / height / height) * 10000;
  }

  bmiResult.innerHTML = result.toFixed(1);

  if (result < 18.5) {
    classification.innerHTML = "underweight";
  } else if (result < 25) {
    classification.innerHTML = "healthy";
  } else if (result < 30) {
    classification.innerHTML = "overweight";
  } else {
    classification.innerHTML = "obese";
  }

  let lowerBoundIdeal = (18.5 * ((height * height) / 10000)).toFixed(1);
  let upperBoundIdeal = (24.9 * ((height * height) / 10000)).toFixed(1);

  idealWeight.innerHTML = `${lowerBoundIdeal}kgs - ${upperBoundIdeal}kgs`;
}

function init() {
  unitSelection.forEach((unit) =>
    unit.addEventListener("change", (e) => handleUnitChange(e))
  );
  heightInput.addEventListener("keyup", (e) => handleHeightInput(e));
  weightInput.addEventListener("keyup", (e) => handleWeightInput(e));
}

init();
