const toastButton = document.querySelector("#button");
const toastMessage = document.querySelector("#toast");

toastButton.addEventListener("click", () => {
  toastMessage.classList.add("show-toast");

  setTimeout(() => {
    toastMessage.classList.remove("show-toast");
  }, 5000);
});
