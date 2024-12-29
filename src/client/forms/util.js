
// Adds name, error, and value fields to newly created form before placed in ref
export const addBaseProperties = (form) => {
	form.fields.forEach((field) => {
		field.name = createNameFromDisplay(field.display); 
		field.error = null;
		if(!field.value) field.value = null;
	});
	return form;
};

// Clears errors from form
export const clearFormErrors = (form) => {
	form.value.fields.forEach((field) => {
		field.error = null;
	});
};

// Gives newly created form a lowercase/hyphenated Name attribute based on the Display name
export const createNameFromDisplay = (str) => {
	return str.toLowerCase().replace(/[^a-z]/g, '-')
};

// Displays form errors returned by validator
export const displayFormErrors = (form, validationErrors) => {
	validationErrors.forEach((error) => {
		const formErrorField = form.value.fields.find(field => field.name === error.field);
		formErrorField.error = error.errors[0];
	});
};

// Gathers data after validation for object to send in POST request
export const gatherValidData = (fields) => {
	let data = {};
	fields.forEach((field) => {
		data[field.name] = field.value;
	});
	return data;
};



