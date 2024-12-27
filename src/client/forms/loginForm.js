
const loginForm = {
	submitText: 'Login',
	fields: [
		{
			name: 'Username',
			required: true,
			minLength: 5,
			maxLength: 25,
			value: 'muh username'
		},
		{	
			name: 'Password',
			type: 'password',
			required: true,
			minLength: 5,
			maxLength: 25,
			value: 'muh password'
		},
	]
};

addNullProperties();

function addNullProperties() {
	loginForm.fields.forEach((field) => {
		field.error = null;
		if(!field.value) field.value = null;
	});
}

export default loginForm;