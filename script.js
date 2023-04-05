
const nameErr = document.getElementById("name-error");
const emailErr = document.getElementById("email-error");
const contactErr = document.getElementById("contact-error");
const messageErr = document.getElementById("message-error");
const submitTitleErr = document.getElementById("submit-title-error");
const submitErr = document.getElementById("submit-error");


function validateName(){
    const name = document.getElementById('name').value;
    if(name.length == 0){
        nameErr.innerHTML = "Full name is required";
        return false;
    }
    nameErr.innerHTML = "";
    return true;
}

function validateEmail(){
    const email = document.getElementById('email').value;
    if(email.length == 0){
        emailErr.innerHTML = "Email is required";
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailErr.innerHTML = "Invalid email format";
        return false;
    }
    emailErr.innerHTML = "";
    return true;
}

function validateContactNo(){
    const mobile = document.getElementById('contact_number').value;
    if(mobile.length == 0){
        contactErr.innerHTML = "Contact number is required";
        return false;
    }
    if(mobile.length !==10){
        contactErr.innerHTML = "Contact number should be 10 digits";
        return false;
    }
    if(!mobile.match(/^[0-9]{10}$/)){
        contactErr.innerHTML = "Contact number should be numbers";
        return false;
    }
    contactErr.innerHTML = "";
    return true;
}

function validateMSG(){
    const message = document.getElementById('message').value;
    const required = 30;
    const left = required - message.length;

    if(left > 0){
        messageErr.innerHTML = left + " characters required";
        return false;
    }
    messageErr.innerHTML = "";
    return true;
}


function validateForm(){
    if(!validateName() || !validateEmail() || !validateContactNo() || !validateMSG()){
        submitTitleErr.innerHTML = 'Message sending failed';
        submitErr.innerHTML = 'Please fix error to submit';
        return false;
    }
    submitTitleErr.innerHTML = "Thank you for contacting me!";
    submitErr.innerHTML = "Email sent successfully";
    return true;
}