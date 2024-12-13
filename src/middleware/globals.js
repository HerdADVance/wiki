
const globals = (req, res, next) => {
    res.locals.user = req.user;
    res.locals.currentPath = req.path;
    next();
}

module.exports = globals;