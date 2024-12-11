
function formatErrors(errors){

	const formattedErrors = [];
	
	errors.forEach(({ path: field, msg }) => {
		formattedErrors.push({ field, msg });
	});

	return formattedErrors;
}

module.exports = formatErrors