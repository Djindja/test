function validateRegistrationForm() {
    const privacyPolicy = isPrivacyPolicy(document.getElementById('checkbox_privacy_policy'));
    const validEmail = validateEmail(document.getElementById('email'));
    // const validMobile = validateMobile(document.getElementById('mobile'));

    if (privacyPolicy && validEmail) {
        loader();
    }

    // if (privacyPolicy && validMobile) {
    //     loader();
    // }
 
    return privacyPolicy && validEmail;
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
    const re = /^-?\d+\.?\d*$/;
    const isValid = re.test(value);

    if (isEmptyValue(value)) {
        const numberErrElement = document.getElementById('mobile_error');
        numberElement.classList.add('with-error');
        showElement(numberErrElement);
        return false;
    }

    if (!isValid) {
        const numberErrElement = document.getElementById('mobile_error');
        emailElement.classList.add('with-error');
        showElement(numberErrElement);
    } else {
        const numberErrElement = document.getElementById('mobile_error');
        hideElement(numberErrElement);
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

    if (e.target.value || e.target.value.length === 0) {
        const errElem = document.getElementById('mobile_error');
        e.target.classList.remove('with-error');
        hideElement(errElem);
    }
}

function loader() {
    document.getElementById('loader').style.display = 'block';

    setTimeout(function () {
        document.getElementById('confirm').style.display = 'block';
        document.getElementById('loader').style.display = 'none';
    }, 3000);
}

function setupListeners() {
    const email = document.getElementById('email');
    const mobile = document.getElementById('mobile');
    email.onkeydown = onInputKeydown;
    mobile.onkeydown = onInputKeydown;
}

setupListeners();


$(document).ready(function () {
    $('#checkbox_privacy_policy').change(function () {
        if (this.checked)
            $('#checkbox_error').hide();
        else
            $('#checkbox_error').show();
    });

    $('.header__link.mobile').click(function () {
        $('.signup__form_group.mobile').show();
        $('.signup__form_group.email').hide();
    });

    $('.header__link.email').click(function () {
        $('.signup__form_group.email').show();
        $('.signup__form_group.mobile').hide();
    });

    $('a.header__link').on('click', function () {
        $('a.header__link.active').removeClass('active');
        $(this).addClass('active');
    });
});

