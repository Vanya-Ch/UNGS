const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require('../models/User');
const session = require('express-session');
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

//createUser('user','user',['user', 'newsCreator'])
//createUser('admin','admin',['admin'])

// Контролер для логіну
const postLogin = async (req, res) => {
    try {
        const { username, password } = req.body;
        const candidate = await User.findOne({ username });

        // Перевірка наявності користувача та порівняння паролів
        if (candidate) {
            const samePass = await bcrypt.compare(password, candidate.password);
            if (samePass) {
                req.session.user = candidate;
                req.session.isAuthenticated = true;
                req.session.save((err) => {
                    if (err) throw err;
                    res.redirect('/pages/news.html');
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
