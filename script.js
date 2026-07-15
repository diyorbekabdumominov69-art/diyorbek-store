const TELEGRAM_URL = "https://t.me/Diyorbek_Cheats";

// Barcha Telegram va Sotib olish tugmalari
document.querySelectorAll(".telegram, .buy, .telegram-btn").forEach(btn => {

    btn.addEventListener("click", function(e){

        e.preventDefault();

        window.open(TELEGRAM_URL, "_blank");

    });

});

// Kartalar animatsiyasi
document.querySelectorAll(".card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px) scale(1.02)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0) scale(1)";

    });

});

// Hero animatsiyasi
window.addEventListener("load",()=>{

    document.querySelector(".hero-content").animate([

        {
            opacity:0,
            transform:"translateY(60px)"
        },

        {
            opacity:1,
            transform:"translateY(0)"
        }

    ],{

        duration:1000,
        easing:"ease"

    });

});

// Scroll animatsiyasi
const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.animate([

                {
                    opacity:0,
                    transform:"translateY(40px)"
                },

                {
                    opacity:1,
                    transform:"translateY(0)"
                }

            ],{

                duration:800

            });

        }

    });

});

document.querySelectorAll(".card,.profile-card").forEach(el=>{

    observer.observe(el);

});

// Tugma bosish effekti
document.querySelectorAll("a").forEach(btn=>{

    btn.addEventListener("mousedown",()=>{

        btn.style.transform="scale(.95)";

    });

    btn.addEventListener("mouseup",()=>{

        btn.style.transform="scale(1)";

    });

});

// Konsolda xabar
console.log("Diyorbek Vault Loaded Successfully");
