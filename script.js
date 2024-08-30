var email = document.getElementById('InputEmail');
var emailError = document.getElementById('emailError');
var mobError = document.getElementById('mobError');
var mob = document.getElementById('InputMob');
var pwd = document.getElementById('InputPassword')
var pwdStrength = document.getElementById('pwdStrength');
var pwdValidity = document.getElementById('pwdValidity');
var flag = 0;

email.addEventListener("keyup", function(){
    let regEx1 = /^([a-zA-Z0-9.-]+)@([a-zA-z0-9-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    if(regEx1.test(email.value)){
        emailError.innerText = "Valid email address";
        email.style.borderColor = 'green';
        flag = 1;
    }
    else {
        emailError.innerText = "Invalid email address";
        email.style.borderColor = 'red';
        flag = 0;
    }
});

mob.addEventListener("keyup", function(){
    let regEx2 = /^(0)?(\+)?(91)?[ \-.]?\d{3}[ \-.]?\d{3}[ \-.]?\d{4}$/;
    if(regEx2.test(mob.value)){
        mobError.innerText = "Valid mobile number";
        mob.style.borderColor = 'green';
        flag = 1;
    }
    else{
        mobError.innerText = "Invalid mobile number";
        mob.style.borderColor = 'red';
        flag = 0;
    }
});

pwd.addEventListener("keyup", function(){
    let pwdRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if(pwdRegex.test(pwd.value)){
        pwdValidity.innerText = 'Valid password';
        pwdValidity.style.color = 'green';
        flag = 1;
    }
    else {
        pwdValidity.innerText = 'Invalid password';
        pwdValidity.style.color = 'red';
        flag = 0;
    }
    checkStrength(pwd.value, pwd);
});

function checkStrength(pwdValue, pwd){
    let str = 0;
    if(pwdValue.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)){
        str += 1;
    }
    if(pwdValue.match(/[0-9]/)){
        str += 1;
    }
    if(pwdValue.match(/.*[\¬\!\"\£\$\%\^\&\*\(\)\_\+\`\-\=\{\}\:\@\~\<\>\?\[\]\;\'\#\,\.\/\\\|]/)){
        str += 1;
    }
    if(pwdValue.length > 7){
        str += 1;
    }

    if(str == 0){
        pwdStrength.innerText = 'Empty';
        pwdStrength.style.color = 'red';
        pwd.style.borderColor = 'red';
    }

    else if(str <= 2) {
        pwdStrength.innerText = 'Weak';
        pwdStrength.style.color = '#f7dc6f';
        pwd.style.borderColor = '#f7dc6f';
    }
    else if(str == 3) {
        pwdStrength.innerText = 'Good';
        pwdStrength.style.color = 'orange';
        pwd.style.borderColor = 'orange';
    }
    else if(str == 4) {
        pwdStrength.innerText = 'Strong';
        pwdStrength.style.color = 'green';
        pwd.style.borderColor = 'green';
    }
};

function signupValidate(){
    return !!flag;
}

function showPwd() {
    var pwd = document.getElementById("InputPassword");   
    if(pwd.type === "password") {
        pwd.type = "text";
    }
    else {
        pwd.type = "password";
    }
}

// function validate(){
//     let regEx1 = /^([a-zA-Z0-9.-]+)@([a-zA-z0-9-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
//     if(regEx1.test(email.value)){
//         emailError.innerText = "Valid email address";
//         email.style.borderColor = 'green';
//     }
//     else {
//         emailError.innerText = "Invalid email address";
//         email.style.borderColor = 'red';
//     }

//     let regEx2 = /^(0)?(\+)?(91)?[ \-.]?\d{3}[ \-.]?\d{3}[ \-.]?\d{4}$/;
//     console.log(mob.value);
//     if(regEx2.test(mob.value)){
//         mobError.innerText = "Valid mobile number";
//         mob.style.borderColor = 'green';
//     }
//     else{
//         mobError.innerText = "Invalid mobile number";
//         mob.style.borderColor = 'red';
//     }
// };