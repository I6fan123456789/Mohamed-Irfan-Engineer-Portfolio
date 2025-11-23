document.getElementById("year").textContent = new Date().getFullYear();

const animatedSections = document.querySelectorAll("[data-anim]");

function animateSections() {
  animatedSections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      section.classList.add("show");
    }
  });
}

window.addEventListener("load", animateSections);
window.addEventListener("scroll", animateSections);
