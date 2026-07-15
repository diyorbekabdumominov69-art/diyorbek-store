// Telegram havolasi
const TELEGRAM_URL = "https://t.me/Diyorbek_Cheats";

// Register tugmasi
const registerBtn = document.getElementById("registerBtn");
const registerBtn2 = document.getElementById("registerBtn2");

function register() {
    alert("Register funksiyasi hali ulanmagan.");
}

if (registerBtn) {
    registerBtn.addEventListener("click", register);
}

if (registerBtn2) {
    registerBtn2.addEventListener("click", register);
}

// Telegram tugmalari
document.querySelectorAll(".telegram, .buy").forEach(button => {
    button.addEventListener("click", function (e) {
        e.preventDefault();
        window.open(TELEGRAM_URL, "_blank");
    });
});

// Card hover effekti
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });
});

// Sahifa yuklanganda animatsiya
window.addEventListener("load", () => {
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.6s";
    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 100);
});
