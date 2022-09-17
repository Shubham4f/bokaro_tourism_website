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

const addNew = document.querySelector(".add-ico");
const tForm = document.querySelector(".traveller-form");

addNew.addEventListener('click', () => {
    tForm.classList.toggle("form-active");
});

const dBtn = document.querySelector(".done-btn");
let tCount = 1;

dBtn.addEventListener('click', () => {
    const warning = document.querySelectorAll(".warning");
    const fName = document.querySelector("#first-name");
    const lName = document.querySelector("#last-name");
    const dob = document.querySelector("#dob");
    const email = document.querySelector("#email");
    const phone = document.querySelector("#number");
    const male = document.querySelector("#male");
    const female = document.querySelector("#female");
    const address = document.querySelector("#address");
    const city = document.querySelector("#city");
    const pin = document.querySelector("#pin");
    const state = document.querySelector("#state");
    const country = document.querySelector("#country");
    const pId = document.querySelector("#id-img");
    let flag = true;
    let validText = /^[a-zA-Z, " "]+$/;

    if (fName.value.length < 3 || !(fName.value.match(validText))) {
        warning[0].innerText = "Invalid first name!";
        flag = false;
    } else {
        warning[0].innerText = "";
    }
    if (lName.value.length < 3 || !(lName.value.match(validText))) {
        warning[1].innerText = "Invalid last name!";
        flag = false;
    } else {
        warning[1].innerText = "";
    }
    if (dob.value == "") {
        warning[2].innerText = "Please enter your dob!";
        flag = false;
    } else {
        dobYears = Date.now() - Date.parse(dob.value);
        dobYears = dobYears / 31536000000;
        if (dobYears < 0) {
            warning[2].innerText = "Please enter your dob correctly!";
            flag = false;
        } else {
            warning[2].innerText = "";
        }
    }
    if (email.value.length < 8 || email.value.indexOf('@') < 4 || email.value.indexOf(".") < 4) {
        warning[3].innerText = "Invalid Email!";
        flag = false;
    } else {
        warning[3].innerText = "";
    }
    if (!(phone.value.length == 10)) {
        warning[4].innerText = "Invalid phone number!";
        flag = false;
    } else {
        warning[4].innerText = "";
    }
    let gender;
    if (male.checked) {
        gender = "Male";
    }
    if (female.checked) {
        gender = "Female";
    }
    if (gender == null) {
        warning[5].innerText = "Please select your gender!";
        flag = false;
    } else {
        warning[5].innerText = "";
    }
    if (address.value == "") {
        warning[6].innerText = "Add your address!";
        flag = false;
    } else if (address.value.length > 100) {
        warning[6].innerText = "Address must not exceed 80 characters.";
        flag = false;
    } else {
        warning[6].innerText = "";
    }
    if (city.value.length < 3 || !(city.value.match(validText))) {
        warning[7].innerText = "Invalid City name!";
        flag = false;
    } else {
        warning[7].innerText = "";
    }
    if (!(pin.value.length == 6)) {
        warning[8].innerText = "Invalid pin (should be 6 digit)!";
        flag = false;
    } else {
        warning[8].innerText = "";
    }
    if (state.value.length < 3 || !(state.value.match(validText))) {
        warning[9].innerText = "Invalid State name!";
        flag = false;
    } else {
        warning[9].innerText = "";
    }
    if (country.value.length < 3 || !(country.value.match(validText))) {
        warning[10].innerText = "Invalid country name!";
        flag = false;
    } else {
        warning[10].innerText = "";
    }
    if (pId.value == "") {
        warning[11].innerText = "Please upload your ID!";
        flag = false;
    } else {
        warning[11].innerText = "";
    }
    if (flag) {
        const tabD = document.querySelector(".t-de");
        const nText = document.querySelector(".no-text");
        dobYears = Math.floor(dobYears);
        let uNumber = Math.floor(1000 + Math.random() * 100) + tCount;
        tabD.innerHTML = tabD.innerHTML + `<tr>
        <td>${tCount}</td>
        <td>${fName.value + " " + lName.value}</td>
        <td>${dobYears}</td>
        <td>${gender}</td>
        <td>${phone.value}</td>
        <td>${uNumber}</td>
        </tr>`;
        tabD.classList.remove("details");
        nText.style.display = "none";
        tCount++;
        tForm.classList.toggle("form-active");
        fName.value = "";
        lName.value = "";
        dob.value = "";
        email.value = "";
        phone.value = "";
        gender = null;
        male.checked = false;
        female.checked = false;
        address.value = "";
        city.value = "";
        pin.value = "";
        state.value = "";
        country.value = "";
        pId.value = "";
    }else{
        alert("Please fill all the information correctly!!!");
    }
});