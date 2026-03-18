// SCROLL ANIMATION
window.addEventListener("scroll", () => {
  document.querySelectorAll(".box").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight) {
      el.classList.add("show");
    }
  });
});

// DARK / LIGHT MODE
function toggleMode(){
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
}

// CONTACT BUTTON
function contact(){
  alert("Email: example@gmail.com\nTelegram: t.me/example");
}
