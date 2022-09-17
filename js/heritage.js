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

const locationBtn = document.querySelectorAll(".location-btn");
const map = document.querySelectorAll(".map");
const mapHtml = [`<div class="mapouter">
<div class="gmap_canvas"><iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?width=650&amp;height=223&amp;hl=en&amp;q=Luguburu Ghantabari&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
</div>
</div>`,
    `<div class="mapouter">
<div class="gmap_canvas"><iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?width=650&amp;height=223&amp;hl=en&amp;q=Jawaharlal Nehru Biological Park&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
</div>
</div>`,
    `<div class="mapouter">
<div class="gmap_canvas"><iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?width=650&amp;height=233&amp;hl=en&amp;q=Garga Dam&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
</div>
</div>`,
    `<div class="mapouter">
<div class="gmap_canvas"><iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?width=650&amp;height=233&amp;hl=en&amp;q=City Park&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
</div>`,
    `<div class="mapouter">
<div class="gmap_canvas"><iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?width=650&amp;height=233&amp;hl=en&amp;q=Parasnath Hills&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
</div>
</div>`,
    `<div class="mapouter">
<div class="gmap_canvas"><iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?width=650&amp;height=233&amp;hl=en&amp;q=Jagannath temple&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
</div>
</div>`
];

let flagMap = [];
for (let i = 0; i < mapHtml.length; i++) {
    flagMap[i] = true;
}

locationBtn.forEach((ele, index) => {
    ele.addEventListener('click', () => {
        if (flagMap[index]) {
            map[index].innerHTML = mapHtml[index];
            flagMap[index] = false;
        } else {
            map[index].innerHTML = "";
            flagMap[index] = true;
        }
    });
});

const speakBtn = document.querySelectorAll(".speak-btn");
const secH = document.querySelectorAll(".sec-heading");

speakBtn.forEach((ele, index) => {
    ele.addEventListener('click', () => {
        let speech = new SpeechSynthesisUtterance();
        speech.text = secH[index].innerText;
        window.speechSynthesis.speak(speech);
    });
});

