
import { addBaseProperties } from './util.js';

let createPageForm = {
	submitText: 'Create Page',
	fields: [
		{
			display: 'Title',
			value: 'First Page',
			placeholder: 'Max 50 chars',
			validators: [
				{required: true},
				{maxLength: 50}
			]
		}
	]
};

createPageForm = addBaseProperties(createPageForm);


export default createPageForm;