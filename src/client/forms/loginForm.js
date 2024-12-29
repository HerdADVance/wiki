
import { addBaseProperties } from './util.js';

let loginForm = {
	submitText: 'Login',
	fields: [
		{
			display: 'Username',
			value: 'jjjjj',
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
	]
};

loginForm = addBaseProperties(loginForm);


export default loginForm;