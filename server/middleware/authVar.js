module.exports = function (req, res, next) {
    res.locals.isAuth = req.session.isAuthenticated;
    if (req.session && req.session.user) {
        req.user = req.session.user;

        req.session.user = req.user;
        req.session.user.status = res.locals.isAuth ? 'online' : 'offline'
        req.session.save(); 
    }

    next();
};