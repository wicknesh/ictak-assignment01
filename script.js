var email = document.getElementById('InputEmail');
var emailError = document.getElementById('emailError');

function validate(){
    let regEx = /^([a-zA-Z0-9.-]+)@([a-zA-z0-9-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    if(regEx.test(email.value)){
        emailError.innerText = "Valid email address";
        return true;
    }
    else {
        emailError.innerText = "Invalid email address";
        return false;
    }
};