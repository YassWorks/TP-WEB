document.addEventListener("DOMContentLoaded", () => {
    let color = document.getElementById("color");
    let size = document.getElementById("size");
    let font = document.getElementById("font");
    let paragraph = document.getElementById("paragraph");

    function new_style() {
        paragraph.style.color = color.value;
        paragraph.style.fontSize = size.value + "px";
        paragraph.style.fontFamily = font.value;
    }

    color.addEventListener("input", new_style);
    size.addEventListener("input", new_style);
    font.addEventListener("change", new_style);
});
