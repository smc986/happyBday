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

        music.pause();
          voices.forEach((voice) => {
        voice.pause();
    });

    });


    video.addEventListener("ended", () => {

        if (!voicePlaying) {
            music.play().catch(() => {});
        }

    });


    video.addEventListener("pause", () => {

        // DON'T restart music while voice is playing
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

            // Tell the program voice is playing
            voicePlaying = true;

            // STOP BACKGROUND MUSIC
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


        voice.addEventListener("ended", () => {

            // Voice finished
            voicePlaying = false;

            // Resume background music
            if (video.paused || video.ended) {
                music.play().catch(() => {});
            }

        });

    });

});