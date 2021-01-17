const contactForm = document.querySelector("#contact-form");



const formContainer = document.querySelector(".form-container");

const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");

const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");


const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const validMessage = document.querySelector("#validMessage");



function formValidation(event) {

    event.preventDefault();

    try {

        if (lengthCheck(name.value, 0)) {
            nameError.style.display = "none";
        } else {
            nameError.style.display = "block";
        }

        if (lengthCheck(subject.value, 9)) {
            subjectError.style.display = "none";
        } else {
            subjectError.style.display = "block";
        }

        if (lengthCheck(address.value, 24)) {
            addressError.style.display = "none";
        } else {
            addressError.style.display = "block";
        }


        if (emailValidation(email.value)) {
            emailError.style.display = "none";
        } else {
            emailError.style.display = "block";
        }


        if (lengthCheck(name.value, 0) && lengthCheck(subject.value, 9) && lengthCheck(address.value, 24) && emailValidation(email.value)) {
            validMessage.innerHTML = '<div class="validFormText">Form has been sent, may the force be with you!</div>';
            contactForm.reset();
        } else {
            validMessage.innerHTML = '<div class="validFormText">Please fill out form correctly</div>';
        }


    } catch (error) {
        formContainer.innerHTML = "Something went wrong!";
    }

}

contactForm.addEventListener("submit", formValidation);

function lengthCheck(value, theLength) {
    if (value.trim().length > theLength) {
        return true;
    } else {
        return false;
    }
}

function emailValidation(email) {
    const regEx = /\S+@\S+\.\S+/;
    const match = regEx.test(email);
    return match;
}














