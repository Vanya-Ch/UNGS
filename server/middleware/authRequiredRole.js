module.exports = function (requiredRoles) {
  return (req, res, next) => {
    if (!req.session.userId) {
      return res.redirect("/login"); 
    }

    // Перевірка, чи у користувача є одна з необхідних ролей
    const userRoles = req.session.roles || [];
    const hasRole = requiredRoles.some(role => userRoles.includes(role));
    
    if (!hasRole) {
      return res.status(403).send("Недостатньо прав");
    }

    next();
  };
};