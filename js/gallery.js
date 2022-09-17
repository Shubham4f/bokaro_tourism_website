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

const gallery = document.querySelector(".gallery");
const img = ["img/h1.jpg", "img/h2.jpg", "img/h3.jpg", "img/h4.jpg", "img/g1.jpg", "img/h5.jpg", "img/h6.jpg", "img/about1.jpg", "img/plant.jpg", "img/about2.jpg", "img/g2.jpg", "img/about3.jpg", "img/about4.jpg", "img/g3.jpg", "img/about5.jpg", "img/about6.jpg", "img/about7.png", "img/about8.jpg", "img/g4.jpg"];

img.forEach((ele) => {
    gallery.innerHTML = gallery.innerHTML + `<img src=${ele} alt=${ele} class="img-Crad-small">`;
});

const imgCardSmall = document.querySelectorAll(".img-Crad-small");
const bigImgDiv = document.querySelector(".big-img-div");
let currentIndex;

imgCardSmall.forEach((ele, index) => {
    ele.addEventListener('click', () => {
        const bigImg = document.querySelector(".img-big");
        const imgCounter = document.querySelector(".counter");
        bigImg.innerHTML = `<img src=${img[index]} alt=${img[index]}>`;
        imgCounter.innerText = `${index + 1}/${img.length}`
        currentIndex = index;
        bigImgDiv.classList.remove("big-img-div-none");
    });
});

const cancelBtn = document.querySelector(".cancel");
const nxtBtn = document.querySelector(".nxt");
const preBtn = document.querySelector(".pre");

cancelBtn.addEventListener('click', () => {
    bigImgDiv.classList.add("big-img-div-none");
});

nxtBtn.addEventListener('click', () => {
    currentIndex = currentIndex + 1;
    if (currentIndex == img.length) {
        currentIndex = 0;
    }
    const bigImg = document.querySelector(".img-big");
    const imgCounter = document.querySelector(".counter");
    bigImg.innerHTML = `<img src=${img[currentIndex]} alt=${img[currentIndex]}>`;
    imgCounter.innerText = `${currentIndex + 1}/${img.length}`
    bigImgDiv.classList.remove("big-img-div-none");
});

preBtn.addEventListener('click', () => {
    currentIndex = currentIndex - 1;
    if (currentIndex == -1) {
        currentIndex = img.length - 1;
    }
    const bigImg = document.querySelector(".img-big");
    const imgCounter = document.querySelector(".counter");
    bigImg.innerHTML = `<img src=${img[currentIndex]} alt=${img[currentIndex]}>`;
    imgCounter.innerText = `${currentIndex + 1}/${img.length}`
    bigImgDiv.classList.remove("big-img-div-none");
});