
// Doesn't modify the actual form in any way
export const baseValidator = (fields) => {
	let errors = []
	fields.forEach((field) => {
		let fieldErrors = []
		field.validators.forEach((validator) => {
			const [[validatorKey, validatorValue]] = Object.entries(validator);
			const validatorFunction = getValidatorFunctionByKey(validatorKey);
			const fieldError = validatorFunction(validatorValue, field.value);
			if(fieldError) fieldErrors.push(fieldError)
		});

		if(fieldErrors.length > 0) errors.push({field: field.name, errors: fieldErrors});
	});
	return errors.length > 0 ? errors : null;
}



// Map that finds correct validator function below
const getValidatorFunctionByKey = (key) => {
	const validatorMap = {
		email: emailValidator,
		maxLength: maxLengthValidator,
		minLength: minLengthValidator,
		required: requiredValidator,
	}
	return validatorMap[key];
}

// Commonly used validator functions
const emailValidator = (required, value) => {
	const errorMessage = "This field must be a valid email address";
	if (!required) return null;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailPattern.test(value)) return errorMessage;
  return null;
}

const maxLengthValidator = (maxLength, value) => {
	const errorMessage = "This field must be no more than " + maxLength + " characters."
	if(value.length > maxLength) return errorMessage;
	return null;
}

const minLengthValidator = (minLength, value) => {
	const errorMessage = "This field must be at least " + minLength + " characters."
	if(value.length < minLength) return errorMessage;
	return null;
}

const requiredValidator = (required, value) => {
	const errorMessage = "This field is required";
	if (!required) return null;
	if(
		value === null ||
    value === undefined ||
    value === '' ||
    (Array.isArray(value) && value.length === 0) ||
    (typeof value === 'object' && Object.keys(value).length === 0)
  ) return errorMessage;

	return null;
}


