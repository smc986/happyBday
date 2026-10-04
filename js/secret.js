window.addEventListener("DOMContentLoaded", () => {

    const music = document.getElementById("bgMusic");
    const video = document.getElementById("memoryVideo");
    const voices = document.querySelectorAll(".loveVoice");

    let voicePlaying = false;

    // Background music volume
    music.volume = 0.35;

    // Start background music
    music.play().catch((err) => {
        console.log("Autoplay blocked:", err);
    });


    // =====================================
    // VIDEO
    // =====================================

    video.addEventListener("play", () => {

        // Stop background music
        music.pause();

        // Stop voice recordings
        voices.forEach((voice) => {
            voice.pause();
        });

        voicePlaying = false;

    });


    video.addEventListener("ended", () => {

        if (!voicePlaying) {
            music.play().catch(() => {});
        }

    });


    video.addEventListener("pause", () => {

        if (voicePlaying) {
            return;
        }

        if (!video.ended) {
            music.play().catch(() => {});
        }

    });


    // =====================================
    // VOICE OF LOVE
    // =====================================

    voices.forEach((voice) => {

        voice.addEventListener("play", () => {

            voicePlaying = true;

            // Stop background music
            music.pause();

            // Pause video
            if (!video.paused) {
                video.pause();
            }

            // Pause other voice recordings
            voices.forEach((otherVoice) => {

                if (otherVoice !== voice) {
                    otherVoice.pause();
                }

            });

        });


        // Voice paused
        voice.addEventListener("pause", () => {

            // Check if this voice actually ended
            if (!voice.ended) {

                voicePlaying = false;

                // Resume background music
                if (video.paused || video.ended) {
                    music.play().catch(() => {});
                }

            }

        });


        // Voice finished
        voice.addEventListener("ended", () => {

            voicePlaying = false;

            // Resume background music
            if (video.paused || video.ended) {
                music.play().catch(() => {});
            }

        });

    });

});

// =====================================
// VOICE CARD SCROLLING
// =====================================

function scrollVoices(direction) {

    const container = document.getElementById("voiceContainer");

    if (!container) return;

    const card = container.querySelector(".voice-card");

    if (!card) return;

    const cardStyle = window.getComputedStyle(card);
    const containerStyle = window.getComputedStyle(container);

    const cardWidth = card.offsetWidth;
    const gap = parseFloat(containerStyle.columnGap) || 18;

    const scrollAmount = cardWidth + gap;

    container.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth"
    });
}