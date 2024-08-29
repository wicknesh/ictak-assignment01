var InputEmailLogin = document.getElementById('InputEmailLogin');
var InputPasswordLogin = document.getElementById('InputPasswordLogin');
var pwdErrorLogin = document.getElementById('pwdErrorLogin');
var loginFlag = 0;

InputEmailLogin.addEventListener("keyup", function(){
    console.log(InputEmailLogin.value);
    let regEx1 = /^([a-zA-Z0-9.-]+)@([a-zA-z0-9-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    if(regEx1.test(InputEmailLogin.value)){
        emailErrorLogin.innerText = "Valid email address";
        InputEmailLogin.style.borderColor = 'green';
        loginFlag = 1;
    }
    else {
        emailErrorLogin.innerText = "Invalid email address";
        InputEmailLogin.style.borderColor = 'red';
        loginFlag = 0;
    }
});

InputPasswordLogin.addEventListener("keyup", function(){
    let pwdRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if(pwdRegex.test(InputPasswordLogin.value)){
        pwdErrorLogin.innerText = 'Valid password';
        pwdErrorLogin.style.color = 'green';
        loginFlag = 1;
    }
    else {
        pwdErrorLogin.innerText = 'Invalid password';
        pwdErrorLogin.style.color = 'red';
        loginFlag = 0;
    }   
});

function loginValidate() {
    return !!loginFlag;
}

function showPwdLogin() {
    var loginPWD = document.getElementById('InputPasswordLogin');
    if(loginPWD.type === "password") {
        loginPWD.type = "text";
    }
    else {
        loginPWD.type = "password";
    }
}

//Login script