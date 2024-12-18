
const globals = (req, res, next) => {
    res.locals.user = req.user;
    res.locals.currentPath = req.path;
    res.locals.hasEditor = false;
    next();
}

module.exports = globals;