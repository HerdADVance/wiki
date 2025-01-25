
import { addBaseProperties } from './util.js';

let registrationForm = {
	submitText: 'Register',
	fields: [
		{
			display: 'Email',
			value: 'bbb@bbb.com',
			validators: [
				{email: true},
				{required: true},
				{minLength: 5},
				{maxLength: 50}
			]
		},
		{
			display: 'Username',
			value: 'reader',
			validators: [
				{email: false},
				{required: true},
				{minLength: 5},
				{maxLength: 25}
			]
		},
		{	
			display: 'Password',
			type: 'password',
			value: 'alexvance',
			validators: [
				{required: true},
				{minLength: 5},
				{maxLength: 25}
			]
		},
		{
			display: 'Confirm Password',
			name: 'passwordConfirm',
			type: 'password',
			value: 'alexvance',
			validators: [
				{required: true},
				{minLength: 5},
				{maxLength: 25}
			]
		},
	]
};

registrationForm = addBaseProperties(registrationForm);


export default registrationForm;