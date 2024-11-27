module.exports = function (requiredRoles) {
  return (req, res, next) => {
      // Перевіряємо, чи є користувач у сесії
      if (!req.session || !req.session.user) {
          return res.redirect("/login");
      }

      // Отримуємо ролі користувача
      const userRoles = req.session.user.roles || [];
      
      // Перевіряємо, чи користувач має одну з потрібних ролей
      const hasRole = requiredRoles.some(role => userRoles.includes(role));

      if (!hasRole) {
          return res.status(403).send("Недостатньо прав, поверніться назад");
      }

      next();
  };
};
