const express = require('express');
const router = express.Router();

router.get('/current-user', (req, res) => {
    if (req.user) {
        return res.json({
            id: req.user.id,
            username: req.user.username,
            roles: req.user.roles,
            name: req.user.name,
            surname: req.user.surname,
        });
    }

    res.status(401).json({ message: 'Користувач не авторизований' });
});

module.exports = router;
