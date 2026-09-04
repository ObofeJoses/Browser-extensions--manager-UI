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