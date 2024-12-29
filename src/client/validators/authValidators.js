
import { baseValidator } from './baseValidator.js';
import { length } from './util.js';

export const loginValidator = (form) => {
	return baseValidator(form.value.fields);
}

export const registrationValidator = (form) => {
	const data = baseValidator(form.value.fields);
	return data;
}
