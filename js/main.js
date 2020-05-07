function validateRegistrationForm(e) {
    e.preventDefault();
    const privacyPolicy = isPrivacyPolicyChecked(document.getElementById('checkbox_privacy_policy'));
    const validEmail = validateEmail(document.getElementById('email'));
    const validMobile = validateMobile(document.getElementById('mobile'));

    if (privacyPolicy && (validEmail || validMobile)) {
        loader();
    }
 
    return (privacyPolicy && validEmail) || (privacyPolicy && validMobile);
}

function validateEmail(emailElement) {
    const value = emailElement.value;
    const re = /\b[\w\.-]+@[\w\.-]+\.\w{2,}\b/;
    const isValid = re.test(value);

    if (isEmptyValue(value)) {
        const emailErrElement = document.getElementById('email_error');
        emailElement.classList.add('with-error');
        showElement(emailErrElement);
        return false;
    }

    if (!isValid) {
        const emailErrElement = document.getElementById('email_error');
        emailElement.classList.add('with-error');
        showElement(emailErrElement);
    } else {
        const emailErrElement = document.getElementById('email_error');
        hideElement(emailErrElement);
    }
    
    return isValid;
}

function validateMobile(numberElement) {
    const value = numberElement.value;
    const re = /^\d{6,10}$/;
    const isValid = re.test(value);

    if (isEmptyValue(value)) {
        const numberErrElement = document.getElementById('mobile_error');
        numberElement.classList.add('with-error');
        showElement(numberErrElement);
        return false;
    }

    if (!isValid) {
        const numberErrElement = document.getElementById('mobile_error');
        numberElement.classList.add('with-error');
        showElement(numberErrElement);
    } else {
        const numberErrElement = document.getElementById('mobile_error');
        hideElement(numberErrElement);
    }

    return isValid;
}

function isPrivacyPolicyChecked(checkboxElement) {
    const value = checkboxElement.checked;
    const checkboxErrElement = document.getElementById('checkbox_error');
    if (value) {
        hideElement(checkboxErrElement);
        return true;
    } else {
        showElement(checkboxErrElement);
        return false;
    }
}

function onInputKeyDownEmail(e) {
    if (e.target.value || e.target.value.length === 0) {
        const errElemEmail = document.getElementById("email_error");
        e.target.classList.remove("with-error");
        hideElement(errElemEmail);
    }
}

function onInputKeyDownMobile(e) {
    if (e.target.value || e.target.value.length === 0) {
        const errElemMobile = document.getElementById("mobile_error");
        e.target.classList.remove("with-error");
        hideElement(errElemMobile);
    }
}

function loader() {
    const loader = document.getElementById('loader');
    showElement(loader);

    setTimeout(function () {
        const confirm = document.getElementById('confirm');
        showElement(confirm);
        hideElement(loader);
    }, 3000);
}

function emailForm() {
    showElement(document.getElementById("signup__email"));
    hideElement(document.getElementById("signup__mobile"));

    const email = document.getElementById("header__link--email");
    const mobile = document.getElementById("header__link--mobile");
    const confirm = document.getElementById('confirm');

    hideElement(confirm);
    email.classList.add("active");
    mobile.classList.remove("active");

    document.getElementById("email").value = ""
    document.getElementById("checkbox_privacy_policy").checked = false;
    document.getElementById("checkbox_notification").checked = false;
    document.getElementById("euro").checked = false;
    document.getElementById("dollar").checked = false;

    const emailInput = document.getElementById("email");
    emailInput.classList.remove("with-error");

    const emailError = document.getElementById("email_error");
    hideElement(emailError);

    const checkboxError = document.getElementById("checkbox_error");
    hideElement(checkboxError);
}

function mobileForm() {
    showElement(document.getElementById("signup__mobile"));
    hideElement(document.getElementById("signup__email"));

    const email = document.getElementById("header__link--email");
    const mobile = document.getElementById("header__link--mobile");
    const confirm = document.getElementById('confirm');

    hideElement(confirm);
    mobile.classList.add("active");
    email.classList.remove("active");

    document.getElementById("mobile").value = ""
    document.getElementById("checkbox_privacy_policy").checked = false;
    document.getElementById("checkbox_notification").checked = false;
    document.getElementById("euro").checked = false;
    document.getElementById("dollar").checked = false;

    const mobileInput = document.getElementById("mobile");
    mobileInput.classList.remove("with-error");

    const mobError = document.getElementById("mobile_error");
    hideElement(mobError);

    const checkboxError = document.getElementById("checkbox_error");
    hideElement(checkboxError);
}

function onChangePrivacyPolicy() {
    const checkbox = document.getElementById("checkbox_privacy_policy").checked;
    const checkError = document.getElementById("checkbox_error");
    if (checkbox)
        hideElement(checkError)
}

function showElement(element) {
    element.classList.remove("invisible");
}

function hideElement(element) {
    element.classList.add("invisible");
}

function isEmptyValue(value) {
    return value == null || value === "";
}

/* I used jQuery here, just as example for emailActive/mobileActive */
// $(document).ready(function () {
//     $('a.header__link').click(function () {
//         $('a.header__link.active').removeClass('active');
//         $(this).addClass('active');
//     });
// });