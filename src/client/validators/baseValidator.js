
export const baseValidator = (formData, fields) => {
	const data = gatherFormData(formData);
	console.log(fields);
	const fieldsList = fields.map(obj => obj.name);
	console.log(fieldsList);
	if(!isObj(data) || !hasCorrectFields(data, fieldsList)){
		return {data: null, error: 'Invalid input'}
	}
	return {data, error: null};
}


// Util functions
function gatherFormData(formData){
	const data = {};
	formData.forEach((value, key) => {
	    data[key] = value;
	});
	return data;
}


function isObj(obj){
	if (typeof obj !== 'object' || obj === null) {
    	return false;
  	}
  	return true;
};


function hasCorrectFields(obj, expectedFields){
	const objKeys = Object.keys(obj);
  	return objKeys.length === expectedFields.length && expectedFields.every(key => objKeys.includes(key));
};



