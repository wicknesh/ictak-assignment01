var email = document.getElementById('InputEmail');
var emailError = document.getElementById('emailError');
var mobError = document.getElementById('mobError');
var mob = document.getElementById('InputMob');

function validate(){
    let regEx1 = /^([a-zA-Z0-9.-]+)@([a-zA-z0-9-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    if(regEx1.test(email.value)){
        emailError.innerText = "Valid email address";
        email.style.borderColor = 'green';
    }
    else {
        emailError.innerText = "Invalid email address";
        email.style.borderColor = 'red';
    }

    let regEx2 = /^(0)?(\+)?(91)?[ \-.]?\d{3}[ \-.]?\d{3}[ \-.]?\d{4}$/;
    console.log(mob.value);
    if(regEx2.test(mob.value)){
        mobError.innerText = "Valid mobile number";
        mob.style.borderColor = 'green';
    }
    else{
        mobError.innerText = "Invalid mobile number";
        mob.style.borderColor = 'red';
    }
};