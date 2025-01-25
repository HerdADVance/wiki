
function isAdmin(req, res, next) {
  if (req.isAuthenticated()) {
    if(req.session.passport.user.role === 1) {
      return next();
    }
  }
  res.status(401).json({ error: 'Unauthorized: Admins only' });
}

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ error: 'Unauthorized: Users only' });
}

function isEditor(req, res, next) {
  if (req.isAuthenticated()) {
    if(req.session.passport.user.role === 1 || req.session.passport.user.role === 2) {
      return next();
    }
  }
  res.status(401).json({ error: 'Unauthorized: Editors only' });
}

module.exports = { isAdmin, isAuthenticated, isEditor };

