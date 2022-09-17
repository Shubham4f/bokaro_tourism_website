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

const cntBtn = document.querySelector(".contact-btn");

cntBtn.addEventListener('click', () => {
    const warning = document.querySelectorAll(".warning");
    const name = document.querySelector("#name");
    let checkBox = document.querySelectorAll(".in-check");
    const email = document.querySelector("#email");
    const phone = document.querySelector("#number");
    const message = document.querySelector("#message");
    let flag = true;
    let validText = /^[a-zA-Z, " "]+$/;
    if (name.value.length < 3 || !(name.value.match(validText))) {
        warning[0].innerText = "Invalid name!";
        flag = false;
    } else {
        warning[0].innerText = "";
    }
    let counter = 0;
    checkBox.forEach((ele) =>{
        if(ele.checked){
            counter++;
        }
    });
    if(counter==0){
        warning[1].innerText = "Please select atleast one subject.";
        flag = false;
    }else{
        warning[1].innerText = "";
    }
    if(email.value.length < 8 || email.value.indexOf('@') < 4 || email.value.indexOf(".") < 4){
        warning[2].innerText = "Invalid Email!";
        flag = false;
    } else {
        warning[2].innerText = "";
    }
    if (!(phone.value.length == 10)) {
        warning[3].innerText = "Invalid phone number!";
        flag = false;
    } else {
        warning[3].innerText = "";
    }
    if (message.value == "") {
        warning[4].innerText = "Message can't be empty!";
        flag = false;
    } else if (message.value.length > 100) {
        warning[4].innerText = "Message must not exceed 100 characters.";
        flag = false;
    }else{
        warning[4].innerText = "";
    }
    if(flag){
        alert("Message Sent");
        console.log(name.value);
        checkBox.forEach((ele) => {
            if(ele.checked){
                console.log(ele.value);
                ele.checked = false;
            }
        });
        console.log(email.value);
        console.log(phone.value);
        console.log(message.value);
        name.value = "";
        email.value = "";
        phone.value = "";
        message.value = "";
    }
});