document.addEventListener("DOMContentLoaded", function () {
    const rainSound = document.getElementById("rain-sound");
    const voiceIcon = document.getElementById("voice-icon");

    // Function to update date and time
    function updateDateTime() {
        const now = new Date();
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const dayOfWeek = daysOfWeek[now.getDay()];

        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const year = now.getFullYear();

        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        document.getElementById("day-of-week").textContent = dayOfWeek;
        document.getElementById("date-time").textContent = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    }

    // Update date and time every second
    setInterval(updateDateTime, 1000);
    updateDateTime();

    // Toggle sound on click
    voiceIcon.addEventListener("click", function () {
        if (rainSound.paused) {
            rainSound.play(); // Play sound if paused
            voiceIcon.classList.remove("fa-volume-mute");
            voiceIcon.classList.add("fa-volume-up");
            rainSound.paused = false;
        } else {
            rainSound.pause(); // Pause sound if playing
            voiceIcon.classList.remove("fa-volume-up");
            voiceIcon.classList.add("fa-volume-mute");
            rainSound.paused = true;
        }
    });
});
