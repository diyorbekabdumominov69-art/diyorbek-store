// =======================
// Diyorbek Vault JS
// =======================


// Telegram link

const telegramURL = "https://t.me/Diyorbek_Cheats";


// Barcha Telegram va Sotib olish tugmalari

document.querySelectorAll(
    ".telegram, .buy, .telegram-footer"
).forEach(button => {


    button.addEventListener("click", function(e){

        e.preventDefault();

        window.open(
            telegramURL,
            "_blank"
        );

    });


});



// Kartalar animatsiyasi

const cards = document.querySelectorAll(".card");


cards.forEach(card => {


    card.addEventListener(
        "mouseenter",
        () => {

            card.style.transform =
            "translateY(-15px) scale(1.03)";

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
            "translateY(0) scale(1)";

        }
    );


});



// Sahifa yuklanganda animatsiya

window.addEventListener(
"load",
()=>{


    document.body.style.opacity = "0";


    setTimeout(()=>{


        document.body.style.transition =
        "opacity .8s";


        document.body.style.opacity = "1";


    },100);


});



// Scroll animatsiya

const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


    if(entry.isIntersecting){


        entry.target.style.opacity="1";

        entry.target.style.transform=
        "translateY(0)";


    }


});


});



document.querySelectorAll(
".card,.profile-card"
).forEach(element=>{


    element.style.opacity="0";

    element.style.transform=
    "translateY(50px)";

    element.style.transition=
    "all .8s ease";


    observer.observe(element);


});
// =======================
// PROFILE SYSTEM (TEMP)
// =======================


// Foydalanuvchi ma'lumotlari

let userData = {

    name: "Guest",

    email: "Login qilinmagan"

};



// Profilni yangilash funksiyasi

function updateProfile(){


    const name =
    document.querySelector(".profile-card h3");


    const email =
    document.querySelector(".profile-card p");


    if(name && email){


        name.innerHTML =
        userData.name;


        email.innerHTML =
        userData.email;


    }


}


// Profilni yuklash

updateProfile();




// Smooth scroll

document.querySelectorAll(
'a[href^="#"]'
).forEach(link=>{


    link.addEventListener(
    "click",
    function(e){


        const target =
        document.querySelector(
            this.getAttribute("href")
        );


        if(target){


            e.preventDefault();


            target.scrollIntoView({

                behavior:"smooth"

            });


        }


    });


});




// Console

console.log(
"Diyorbek Vault System Loaded"
);
// =======================
// FIREBASE AUTH SYSTEM
// =======================


// Firebase kutubxonalari HTML ichida ulanadi
// firebaseConfig o'rniga o'zingiznikini qo'yasiz


const firebaseConfig = {

    apiKey: "YOUR_API_KEY",

    authDomain: "YOUR_PROJECT.firebaseapp.com",

    projectId: "YOUR_PROJECT_ID",

    storageBucket: "YOUR_BUCKET",

    messagingSenderId: "YOUR_SENDER_ID",

    appId: "YOUR_APP_ID"

};


// Firebase boshlash

firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();



// Register

function registerUser(email,password){


    auth.createUserWithEmailAndPassword(
        email,
        password
    )

    .then((userCredential)=>{


        const user =
        userCredential.user;


        console.log(
        "Register:",
        user.email
        );


        alert(
        "Akkaunt yaratildi!"
        );


    })


    .catch(error=>{


        alert(
        error.message
        );


    });


}




// Login

function loginUser(email,password){


    auth.signInWithEmailAndPassword(
        email,
        password
    )

    .then((userCredential)=>{


        const user =
        userCredential.user;


        document.querySelector(
        ".profile-card h3"
        ).innerHTML =
        user.email;


        document.querySelector(
        ".profile-card p"
        ).innerHTML =
        "Login muvaffaqiyatli";


    })


    .catch(error=>{


        alert(
        error.message
        );


    });


}




// Logout

function logoutUser(){


    auth.signOut()
    
    .then(()=>{


        alert(
        "Chiqildi"
        );


    });


}




// Tekshirish

auth.onAuthStateChanged(user=>{


    if(user){


        console.log(
        "User:",
        user.email
        );


    }


});
