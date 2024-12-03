module.exports = function (req, res, next) {
    res.locals.isAuth = req.session.isAuthenticated;

    if (req.session && req.session.user) {
        req.user = req.session.user;

        // Переконайтеся, що дані користувача додаються до сесії
        req.session.user = req.user;
        req.session.save(); // Додаємо надійне збереження сесії
        console.log('AuthVar - User in session:', req.user);
    } else {
        console.log('AuthVar - No user in session');
    }

    next();
};