window.addEventListener("DOMContentLoaded", () => {

    const music = document.getElementById("bgMusic");
    const video = document.getElementById("memoryVideo");

    // Set volume
    music.volume = 0.35;

    // Play background music
    music.play().catch((err) => {
        console.log("Autoplay blocked:", err);
    });

    // Pause music when video starts
    video.addEventListener("play", () => {
        music.pause();
    });

    // Resume music when video ends
    video.addEventListener("ended", () => {
        music.play().catch(() => {});
    });

    // Resume music if user pauses the video
    video.addEventListener("pause", () => {
        if (!video.ended) {
            music.play().catch(() => {});
        }
    });

});