
 // Live time and date in the Philippines
function updateClock() {
    const now = new Date();

    document.getElementById("clock").textContent =
        now.toLocaleTimeString("en-US", {
            timeZone: "Asia/Manila",
            hour: "numeric",
            minute: "2-digit",
            second: "2-digit"
        });

    document.getElementById("date").textContent =
        now.toLocaleDateString("en-US", {
            timeZone: "Asia/Manila",
            month: "long",
            day: "numeric",
            year: "numeric"
        });

    document.getElementById("day").textContent =
        now.toLocaleDateString("en-US", {
            timeZone: "Asia/Manila",
            weekday: "long"
        });
}

updateClock();
setInterval(updateClock, 1000);


// Switch between dark and light themes
function toggleTheme() {
    document.body.classList.toggle("light");

    const isLight = document.body.classList.contains("light");

    document.getElementById("themeName").textContent =
        isLight ? "Light Blue" : "Blue Tech";
}


// Upload your own profile photo
document.getElementById("photoInput").addEventListener("change", function(event) {
    const file = event.target.files[0];

    if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();

        reader.onload = function(e) {
            document.getElementById("profileImage").src = e.target.result;
        };

        reader.readAsDataURL(file);
    }
});
