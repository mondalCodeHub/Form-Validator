// const and variables 
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

// error in input 
function showErrorMsg(input, message) {
    const formContent = input.parentElement;
    formContent.className = 'form-contenet danger'
    const errorMsg = formContent.querySelector('small');
    errorMsg.innerText = message;
}

// input success
function showSuccessMsg(input) {
    const formContent = input.parentElement;
    formContent.className = 'form-contenet success'
}

// check email is valid or not 
function checkEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// check length to see if the input value is less than or greater than the minimum or maximum value
function checkLength(input, min, max) {
    if (input.value.length < 3) {
        showErrorMsg(input, `${getFieldName(input)} must be atleast ${min} characters`);
    } else if (input.value.length > max) {
        showErrorMsg(input, `${getFieldName(input)} must not above ${max} characters`)
    } else {
        showSuccessMsg(input)
    }
}

// getFieldName
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// event listner
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // username-check
    if (username.value === '') {
        showErrorMsg(username, 'Username is required')
    } else {
        showSuccessMsg(username)
    }

    // email check
    if (email.value === '') {
        showErrorMsg(email, 'Email address is required')
    } else if (!checkEmail(email.value)) {
        showErrorMsg(email, 'Email address is not valid ')
    } else {
        showSuccessMsg(email)
    }

    // password check
    if (password.value === '') {
        showErrorMsg(password, 'Password is required')
    } else {
        showSuccessMsg(password)
    }

    // confirm-password check
    if (confirmPassword.value === '') {
        showErrorMsg(confirmPassword, 'Password is required')
    } else {
        showSuccessMsg(confirmPassword)
    }

    checkLength(username, 3, 15);
    checkLength(password, 6, 20);

})
// @mondalcodehub | November-2022