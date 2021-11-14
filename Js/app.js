const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".menu");
const menuLink = document.querySelector(".menu ul li a")

document.addEventListener("click", e => {
    if (e.target.matches(".hamburger *")) {
        console.log(e.target);
        hamburger.classList.toggle("is-active");
        navBar.classList.toggle("open");
    }

    if (e.target.matches(".menu ul li a")) {
        console.log(e.target);
        navBar.classList.remove("open");
        hamburger.classList.remove("is-active");

        // document.querySelector(navBar).classList.remove("open")
        // document.querySelector(hamburger).classList.remove("is-active")
      }
})