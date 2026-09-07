//remove button functionality

console.log("JavaScript is connected!");

const filterButtons = document.querySelectorAll(".tablinks");
const extensions = document.querySelectorAll(".extension");
const removeButtons = document.querySelectorAll(".remove-btn");

console.log(filterButtons);
console.log(extensions);
console.log(removeButtons);


removeButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const card = button.closest(".extension");

    card.remove();
  });
});


//This script is for the toggle switch functionality
const toggleInputs = document.querySelectorAll(".switch input");

toggleInputs.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      console.log("Extension is Active");
    } else {
      console.log("Extension is Inactive");
    }
  });
});