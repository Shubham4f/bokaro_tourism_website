const navDiv = document.querySelector(".nav-div");
const smallNav = document.querySelector(".small-nav");
const navLinkActive = document.querySelector(".nav-link-active");
const navLogo = document.querySelector(".nav-logo");

smallNav.addEventListener('click', () => {
    smallNav.classList.toggle('small-nav-active');
    navDiv.classList.toggle('nav-div-active');
});

navLinkActive.addEventListener('click', () => {
    smallNav.classList.toggle('small-nav-active');
    navDiv.classList.toggle('nav-div-active');
});

navLogo.addEventListener('click', () => {
    smallNav.classList.remove('small-nav-active');
    navDiv.classList.remove('nav-div-active');
});

const textType = document.querySelector(".text-typewrite");
const welcomeMessage = ["Bokaro.", "Steel-City.", "Ispat-Nagar."];
let messageIndex = 0;
let charIndex = 0;

function typing() {
    if (charIndex < welcomeMessage[messageIndex].length) {
        textType.innerText = textType.innerText + welcomeMessage[messageIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typing, 200);
    } else {
        setTimeout(erasing, 2500)
    }
}

function erasing() {
    if (charIndex > 0) {
        textType.innerText = welcomeMessage[messageIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erasing, 100);
    }
    else {
        messageIndex++;
        if (messageIndex == welcomeMessage.length) {
            messageIndex = 0;
        }
        setTimeout(typing, 500);
    }
}

typing();

const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

function timeUpdate() {
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    if (h < 10) {
        hour.innerText = `0${h}`;
    } else {
        hour.innerText = h;
    }
    if (m < 10) {
        min.innerText = `0${m}`;
    } else {
        min.innerText = m;
    }
    if (s < 10) {
        sec.innerText = `0${s}`;
    } else {
        sec.innerText = s;
    }

}

timeUpdate();

setInterval(() => {
    timeUpdate();
}, 1000);


function todaydate(){
    const dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const day = document.querySelector(".day")
    const date = document.querySelector(".date")
    const month = document.querySelector(".month")
    let d = new Date();
    day.innerText =  dayArray[d.getDay()];
    date.innerText = d.getDate()    ;
    month.innerText = monthArray[d.getMonth()];
}

todaydate();