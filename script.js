document.addEventListener("DOMContentLoaded", function () {
    const typewriter = document.querySelector(".typewriter");
    let text = "Hello,";
    let index = 0;

    function type() {
        if (index < text.length) {
            typewriter.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 100); // Adjust typing speed if needed
        }
    }

    type();
});
