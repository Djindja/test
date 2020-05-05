function validateRegistrationForm() {
    const privacyPolicy = isPrivacyPolicy(document.getElementById('checkbox_privacy_policy'));
    const isInvalidEmail = validateEmail(document.getElementById('email'));
    return privacyPolicy && isInvalidEmail;
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
        hideElement(emailErrElement);
    }
    
    return isValid;
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

function isPrivacyPolicy(checkboxElement) {
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

function onInputKeydown(e) {
    if (e.target.value || e.target.value.length === 0) {
        const errElem = document.getElementById('email_error');
        e.target.classList.remove('with-error');
        hideElement(errElem);
    }
}

function setupListeners() {
    const email = document.getElementById('email');
    email.onkeydown = onInputKeydown;
}

setupListeners();

$('a.header__link').on('click', function () {
    $('a.header__link.active').removeClass('active');
    $(this).addClass('active');
});