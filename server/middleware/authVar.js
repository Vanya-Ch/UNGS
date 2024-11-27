module.exports = function (req, res, next) {
    res.locals.isAuth = req.session.isAuthenticated;

    if (req.session && req.session.user) {
        req.user = req.session.user; // Додаємо користувача в `req.user`
        console.log('AuthVar - User in session:', req.user);
    } else {
        console.log('AuthVar - No user in session');
    }

    next();
};