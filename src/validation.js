import { extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import { messages } from 'vee-validate/dist/locale/en.json';


Object.keys(rules).forEach(rule => {
    extend(rule, {
        ...rules[rule], // copies rule configuration
        message: messages[rule] // assign message
    });
});

extend('password', {
    params: ['target'],
    validate(value, { target }) {
        return value === target;
    },
    message: 'Password confirmation does not match'
});

extend('user-number', {
    params: ['phone_number'],
    validate(value, { phone_number }) {
        if (phone_number[0] === '0' && phone_number[1] ==='1' && phone_number.length == 11) {
            return true;
        }
    },
    message: 'Please enter a valid number'
});

