// const and variables 
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

// error in input - showErrorMsg()
function showErrorMsg(input, message) {
    const formContent = input.parentElement;
    formContent.className = 'form-contenet danger'
    const errorMsg = formContent.querySelector('small');
    errorMsg.innerText = message;
}

// input success - showSuccessMsg()
function showSuccessMsg(input) {
    const formContent = input.parentElement;
    formContent.className = 'form-contenet success'
}

// check email is valid or not - checkEmail()
function checkEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email.value.trim())) {
        showSuccessMsg(email);
    } else {
        showErrorMsg(email, 'Email is not valid');
    }
}

// input check
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showErrorMsg(input, `${getFieldName(input)} is required`);
        } else {
            showSuccessMsg(input)
        }
    });
}

// check length
function checkLength(input, min, max) {
    if (input.value.length < 3) {
        showErrorMsg(input, `${getFieldName(input)} must be atleast ${min} characters`);
    } else if (input.value.length > max) {
        showErrorMsg(input, `${getFieldName(input)} must not above ${max} characters`)
    } else {
        showSuccessMsg(input)
    }
}

// determine whether or not the password matches
function checkPasswordMatchorNot(password1,password2){
    if(password1.value !== password2.value){
        showErrorMsg(password2,'Password do not match ')
    }
}

// getFiledName
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// event listner
form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkRequired([username, email, password, confirmPassword]);
    checkEmail(email);
    // input,min,max
    checkLength(username, 3, 15);
    checkLength(password, 6, 20);
    // check-password
    checkPasswordMatchorNot(password, confirmPassword);
})


// @mondalcodehub | November-2022