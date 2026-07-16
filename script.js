// =======================
// Diyorbek Vault System
// =======================


// Telegram

const telegramURL = "https://t.me/Diyorbek_Cheats";


// Telegram tugmalar

document.querySelectorAll(
".telegram, .buy, .telegram-footer"
).forEach(btn=>{


btn.addEventListener("click",()=>{


window.open(
telegramURL,
"_blank"
);


});


});




// PAGE LOAD

window.addEventListener("load",()=>{


document.body.style.opacity="1";


});




// CARD ANIMATION

const observer =
new IntersectionObserver(entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add(
"show"
);


}


});


},{
threshold:0.2
});



document.querySelectorAll(
".card,.profile-card"
)
.forEach(card=>{


observer.observe(card);


});





// PROFILE

let userData={

name:"Guest",

email:"Login qilinmagan"

};



function updateProfile(){


const name =
document.querySelector(
".profile-card h3"
);


const info =
document.querySelector(
".profile-card p"
);



if(name && info){


name.textContent =
userData.name;


info.textContent =
userData.email;


}


}



updateProfile();





// SMOOTH SCROLL


document.querySelectorAll(
'a[href^="#"]'
)
.forEach(link=>{


link.onclick=e=>{


const target =
document.querySelector(
link.getAttribute("href")
);



if(target){


e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}



};


});





console.log(
"Diyorbek Vault Loaded 🚀"
);
