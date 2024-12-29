
import { addBaseProperties } from './util.js';

let registrationForm = {
	submitText: 'Registration',
	fields: [
		{
			display: 'Email',
			required: true,
			minLength: 5,
			maxLength: 25,
			value: 'muh username'
		},
		{
			display: 'Username',
			required: true,
			minLength: 5,
			maxLength: 25,
			value: 'muh username'
		},
		{	
			display: 'Password',
			type: 'password',
			required: true,
			minLength: 5,
			maxLength: 25,
			value: 'muh password'
		},
		{
			display: 'Confirm Password',
			required: true,
			minLength: 5,
			maxLength: 25,
			value: 'muh password'
		},
	]
};

registrationForm = addBaseProperties(registrationForm);


export default registrationForm;