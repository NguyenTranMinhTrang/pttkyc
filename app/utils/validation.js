import validator from "is_js";

const checkEmpty = (value, key) => {
    if (validator.empty(value.trim())) {
        return `${key}`;
    } else {
        return '';
    }
}

const checkMinLength = (value, minlength, key) => {
    if (value.trim().length < minlength) {
        return `${key}`;
    }
    else {
        return '';
    }
}

export default function (data) {
    const { username, password } = data;

    if (username !== undefined) {
        let emptyValidationText = checkEmpty(username, 'Please enter your username !');
        if (emptyValidationText !== '') {
            return emptyValidationText;
        }
    }

    if (password !== undefined) {
        let emptyValidationText = checkEmpty(password, 'Please enter your password !');
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else {
            let checkLength = checkMinLength(password, 8, "Password must be at least 8 characters !");
            if (checkLength !== '') {
                return checkLength;
            }
        }
    }
}