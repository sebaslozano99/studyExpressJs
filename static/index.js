const btnEl = document.querySelector("button");
const bodyEl = document.querySelector("body");
const titleEl = document.querySelector("h1");

btnEl.addEventListener("click", () => {
    bodyEl.classList.toggle("theme");
    titleEl.classList.toggle("titleTheme");
})