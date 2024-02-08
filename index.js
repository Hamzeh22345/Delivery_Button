const button = document.querySelector(".h-button");
const container = document.querySelector(".container");
const ship = document.querySelector(".ship");
const done = document.querySelector(".done");
var isActive = false;

button.addEventListener("click", function () {
  if (!isActive) {
    isActive = true;
    container.classList.add("move");
    setTimeout(function () {
      ship.innerHTML = `<img style="width: 12px;" src="./Check.png" alt=""> Order Done`;
    }, 1000);

    setTimeout(function () {
      ship.style.opacity = "1";
    }, 4000);
    setTimeout(function () {
      container.classList.remove("move");
      ship.innerHTML = "Ship Order"
      isActive = false;
    }, 6000);
  }
});
