
import { baseValidator } from './baseValidator.js';
import { length } from './util.js';

export const createPageValidator = (form) => {
	return baseValidator(form.value.fields);
}