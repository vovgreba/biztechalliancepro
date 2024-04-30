const filterList = document.querySelector(".filter");
const filterButtons = filterList.querySelectorAll(".filter-btn");
const services = document.querySelectorAll(".service");

let servicesIndex = 0;

services.forEach((services) => {
  services.style.viewTransitionName = `conf-${++servicesIndex}`;
});

filterButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let confCategory = e.target.getAttribute("data-filter");

    if (!document.startViewTransition) {
      updateActiveButton(e.target);
      filterEvents(confCategory);
    }

    document.startViewTransition(() => {
      updateActiveButton(e.target);
      filterEvents(confCategory);
    });
  });
});

function updateActiveButton(newButton) {
  filterList.querySelector(".active").classList.remove("active");
  newButton.classList.add("active");
}

function filterEvents(filter) {
  services.forEach((services) => {
    // get each servicess category
    let eventCategory = services.getAttribute("data-category");

    // check if that category matches with the filter
    if (filter === eventCategory) {
      services.removeAttribute("hidden");
    } else {
      services.setAttribute("hidden", "");
    }
  });
}

