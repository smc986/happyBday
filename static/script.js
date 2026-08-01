document.addEventListener("DOMContentLoaded", () => {

    const bg = document.getElementById("bg-effects");

    /* 🤍 WHITE HEARTS */
    if (bg) {
        setInterval(() => {
            let heart = document.createElement("div");
            heart.className = "heart";

            heart.style.left = Math.random() * 100 + "vw";
            heart.style.top = "100%";
            heart.style.animation = "floatHearts 6s linear";

            bg.appendChild(heart);

            setTimeout(() => heart.remove(), 6000);
        }, 1000);
    }

    /*  NO BUTTON RUN AWAY */
    const noBtn = document.getElementById("noBtn");

    if (noBtn) {
        noBtn.addEventListener("mouseover", () => {
            const x = Math.random() * 200 - 100;
            const y = Math.random() * 200 - 100;

            noBtn.style.transform = `translate(${x}px, ${y}px)`;
        });
    }

});


/* Navigation */
function go() {
    window.location.href = "/login";
}