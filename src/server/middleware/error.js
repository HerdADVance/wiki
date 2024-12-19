const errorHandler = (err, req, res, next) => {
	console.log(err);
	if(err.status){
		res.status(err.status).json({ msg: err });
	} else{
		res.status(500).json({ msg: err });
	}
};

module.exports = errorHandler;