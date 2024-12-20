module.exports = function (requiredRoles) {
  return (req, res, next) => {
      if (!req.session || !req.session.user) {
          return res.redirect("/login");
      }

      const userRoles = req.session.user.roles || [];
      
      const hasRole = requiredRoles.some(role => userRoles.includes(role));

      if (!hasRole) {
          return res.status(403).send("Недостатньо прав, поверніться назад");
      }

      next();
  };
};
