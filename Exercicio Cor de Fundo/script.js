const btn = document.querySelector("#box-int");

btn.addEventListener("click", () => {
    let body = document.querySelector("body");
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});
btn.addEventListener("mouseover", () => {
    btn.style.transform = "scale(1.1)";
    btn.style.transition = "all 0.3s";
});
btn.addEventListener("mouseout", () => {
    btn.style.transform = "scale(1)";
});

