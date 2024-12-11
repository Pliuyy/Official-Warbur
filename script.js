const heading = document.getElementById("heading");
const moon = document.getElementById("moon");
const stars = document.getElementById("stars");

window.addEventListener("scroll", () => {
    let value = window.scrollY;

    heading.style.marginTop = value * 1.5 + 'px';
    moon.style.transform = `translateX(${value * 0.2}px)`;
    stars.style.transform = `translateY(${value * 0.1}px)`;
});

// Add a glow effect on scroll
window.addEventListener("scroll", () => {
    document.body.style.backgroundColor =
        `rgb(${25 + value * 0.05}, ${25 + value * 0.05}, ${40 + value * 0.1})`;
});