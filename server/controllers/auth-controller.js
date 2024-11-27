const bcrypt = require("bcryptjs");
const User = require('../models/User');
const express = require('express');
const app = express();

// Middleware для обробки JSON і URL-кодованих даних
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Функція для створення користувача
async function createUser(username, password, role) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword, role });
    try {
        const savedUser = await user.save();
        console.log('User created:', savedUser);
    } catch (error) {
        console.error('Error creating user:', error);
    }
}
//createUser('newsCreator','newsCreator',['user', 'newsCreator'])
//createUser('user','user')
// Контролер для логіну
const postLogin = async (req, res) => {
    try {
        const { username, password } = req.body;
        const candidate = await User.findOne({ username });

        if (candidate) {
            const samePass = await bcrypt.compare(password, candidate.password);
            if (samePass) {
                req.session.user = {
                    id: candidate._id,
                    roles: candidate.role,
                };
                req.session.isAuthenticated = true;

                console.log('Сесія перед збереженням:', req.session);

                req.session.save((err) => {
                    if (err) {
                        console.error('Помилка збереження сесії:', err);
                        return res.status(500).send('Помилка збереження сесії');
                    }
                    res.redirect('/news'); // Перенаправлення на потрібну сторінку
                });
            } else {
                res.redirect('/login');
            }
        } else {
            res.redirect('/login');
        }
    } catch (e) {
        console.error('Помилка входу:', e);
        res.status(500).send('Сталася помилка при вході.');
    }
};



// Контролер для виходу
const postLogout = async (req, res) => {
    req.session.destroy((err) => {
        if (err) return res.status(500).send("Не вдалося вийти");
        res.redirect("/login");
    });
};

module.exports = { postLogin, postLogout };