
function handleValidation(result){
  console.log(result.errors)
  if(result.errors.length > 0) return { message: 'Invalid request data' }
  return {}
}

module.exports = handleValidation