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

    filterExtensions(currentFilter);
  });
});

// Keep track of the current filter

let currentFilter = "all";


// Filter functionality

function filterExtensions(filter) {
 document.querySelectorAll(".extension").forEach((card) => {
    const isActive = card.querySelector(".switch input").checked;

    if (
      filter === "all" ||
      (filter === "active" && isActive) ||
      (filter === "inactive" && !isActive)
    ) {
      card.style.display = "grid";
    } else {
      card.style.display = "none";
    }
  });
}

// Filter button functionality

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => {
      btn.classList.remove("active-tab");
    });

    button.classList.add("active-tab");

    currentFilter = button.dataset.filter;

    filterExtensions(currentFilter);
  });
});