
import {baseValidator} from './baseValidator.js';
import {length} from './util.js';

export const loginValidator = (formData, fields) => {
	

	const validation = baseValidator(formData, fields);
	if (validation.error) return validation.error;
	const user = validation.data

	return formData;

	// .forEach((fields) => {
		
	// });
	
	//if(!isValidLength(user.username)) return 
	
	
	// table.increments('id').primary();
	// table.string('email', 255).unique().notNullable();
	// table.string('username', 25).unique().notNullable();
	// table.string('password', 25).notNullable();
	// table.integer('role');
	// table.timestamps(true, true);

	
}

export const registrationValidator = (data) => {
	return true;
}
