const btn=document.querySelector(".btn");
const container=document.querySelector(".container");
const wrapper=document.querySelector(".wrapper");
const btn2=document.querySelector(".btn");
const circle=document.querySelector(".circle");

btn.addEventListener("click", (e) => {
    container.classList.toggle("active")
    btn2.classList.toggle("active")
    wrapper.classList.toggle("active")
    circle.classList.toggle("active")
  e.target.innerText = e.target.innerText === "Dark" ? "Light" : "Dark";
});


wrapper.addEventListener("click", (e) => {
    container.classList.toggle("active")
    btn2.classList.toggle("active")
    wrapper.classList.toggle("active")
    circle.classList.toggle("active")
});