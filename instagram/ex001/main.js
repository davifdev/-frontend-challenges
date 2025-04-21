const btn = document.querySelector(".btn-toggle");
const section = document.querySelector("section");

btn.addEventListener("click", () => {
  section.classList.toggle('dark-theme')
});