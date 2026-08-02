// ===============================
// Fade In Animation
// ===============================

const images = document.querySelectorAll(".gallery img");
const timelineCards = document.querySelectorAll(".content");

function reveal() {

    const trigger = window.innerHeight * 0.85;

    images.forEach((img) => {

        const top = img.getBoundingClientRect().top;

        if (top < trigger) {
            img.classList.add("show");
        }

    });

    timelineCards.forEach((card) => {

        const top = card.getBoundingClientRect().top;

        if (top < trigger) {
            card.classList.add("show");
        }

    });

}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);


// ===============================
// Image Popup
// ===============================

const popup = document.querySelector(".popup");
const popupImg = document.querySelector(".popup-img");
const closeBtn = document.querySelector(".close");

images.forEach((img) => {

    img.addEventListener("click", () => {

        popup.style.display = "flex";
        popupImg.src = img.src;

    });

});

closeBtn.addEventListener("click", () => {

    popup.style.display = "none";

});

popup.addEventListener("click", (e) => {

    if (e.target === popup) {
        popup.style.display = "none";
    }

});


// ===============================
// ESC Key Closes Popup
// ===============================

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {
        popup.style.display = "none";
    }

});

//egg
function showEgg() {

    if (currentEgg || index >= messages.length) return;

    const egg = document.createElement("div");
    egg.className = "egg-card";

    // Random position
    egg.style.left = (Math.random() * 75) + "%";
    egg.style.top = (Math.random() * 80) + "%";

    egg.innerHTML = `
        <img src="images/egg.png" class="egg">
        <div class="break-text">Break Me!</div>
        <div class="message" style="display:none;">
            ${messages[index]}
        </div>
    `;

    eggLayer.appendChild(egg);
    currentEgg = egg;

    const img = egg.querySelector(".egg");

    img.onclick = function () {

        // Prevent multiple clicks
        img.onclick = null;

        img.classList.add("shake");

        setTimeout(() => {

            img.style.display = "none";
            egg.querySelector(".break-text").style.display = "none";

            // Create video
            const video = document.createElement("video");
            video.src = "videos/egg-hatch.mp4";   // <-- Your animation
            video.autoplay = true;
            video.muted = true;
            video.playsInline = true;
            video.className = "egg-video";

            egg.appendChild(video);

            // After animation finishes
            video.onended = function () {

                video.remove();

                // If you have a chick image
                const chick = document.createElement("img");
                chick.src = "images/chick.png";
                chick.className = "egg";
                egg.appendChild(chick);

                // Show message
                const msg = egg.querySelector(".message");
                msg.style.display = "block";

                // Hide after 4 sec
                setTimeout(() => {

                    egg.remove();
                    currentEgg = null;
                    index++;

                }, 4000);
            };

        }, 700);

    };

}

//egg msg
const gallery = document.getElementById("gallery");
const eggLayer = document.getElementById("eggLayer");

const messages = [
    "🐣 You make every day brighter ❤️",
    "🌸 Stay happy always!",
    "🎂 Happy Birthday!",
    "💖 Thank you for every memory.",
    "✨ I wish u a great success",
    "🎁 One more surprise is waiting search it..."
];

let currentEgg = null;
let index = 0;

function showEgg() {

    if (currentEgg || index >= messages.length)
        return;

    const egg = document.createElement("div");
    egg.className = "egg-card";

    // Random position
    egg.style.left = (Math.random() * 75) + "%";
    egg.style.top = (Math.random() * 80) + "%";

    egg.innerHTML = `
        <img src="../images/egg.png" class="egg">
        <div class="break-text">Break Me!</div>
        <div class="message" style="display:none;">
            ${messages[index]}
        </div>
    `;

    eggLayer.appendChild(egg);
    currentEgg = egg;

    const img = egg.querySelector(".egg");

    img.onclick = function () {

        // Prevent multiple clicks
        img.onclick = null;

        // Shake animation
        img.classList.add("shake");

        // Change to cracked egg
        setTimeout(() => {

            img.classList.remove("shake");
            img.src = "../images/cracked.png";

        }, 700);

        // Change to chick
        setTimeout(() => {

            img.src = "images/chick.png";

            egg.querySelector(".break-text").style.display = "none";

            const msg = egg.querySelector(".message");
            msg.style.display = "block";

        }, 1500);

        // Remove after 4 seconds
        setTimeout(() => {

            egg.style.opacity = "0";

            setTimeout(() => {

                egg.remove();
                currentEgg = null;
                index++;

            }, 500);

        }, 3500);
    };
}

// First egg after 6 seconds
setTimeout(showEgg, 6000);

// New egg every 10 seconds
setInterval(() => {

    if (!currentEgg && index < messages.length) {
        showEgg();
    }

}, 50000);