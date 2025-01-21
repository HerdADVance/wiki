
import { baseValidator } from './baseValidator.js';
import { length } from './util.js';

export const loginValidator = (form) => {
	return baseValidator(form.value.fields);
}

export const registrationValidator = (form) => {
	return baseValidator(form.value.fields);
}
