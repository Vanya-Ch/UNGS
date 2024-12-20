const bcrypt = require("bcryptjs");
const User = require('../models/User');
const express = require('express');
const app = express();

// Middleware для обробки JSON і URL-кодованих даних
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Функція для створення користувача
/* async function createUser(username, password, role, name, surname, fullname, position = '', department = '', mail = '', phone = '') {
    const hashedPassword = await bcrypt.hash(password, 10); // Хешуємо пароль

    // Створюємо нового користувача
    const user = new User({
        username,
        password: hashedPassword,
        role: role || ['user'], // Роль за замовчуванням — ['user']
        name,
        surname,
        fullname,
        position,
        department,
        contacts: { mail, phone }, // Заповнюємо контакти
        status: 'offline', // Статус за замовчуванням
        duty: role.includes('driver') ? 'не черговий' : undefined // Якщо роль "driver", встановлюємо "3" (не черговий)
    });

    try {
        const savedUser = await user.save(); // Зберігаємо користувача в базу
        console.log('User created:', savedUser);
        return savedUser; // Повертаємо створеного користувача
    } catch (error) {
        console.error('Error creating user:', error);
        throw error; // Пробрасываем ошибку, если она произошла
    }
} */


/* (async () => {
    await createUser(
        'dr24tr006', 
        'dr24tr006HC', 
        ['user', 'driver'],
        'Олексій', 
        'Ноженко',
        'Ноженко Олексій Б', 
        'Водій автотранспортних засобів', 
        'transport',
        'o.nozhenko@ungs-drilling.com.ua', 
        '+380000000000' 
    );
})(); */


// Контролер для логіну
const postLogin = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Знаходимо користувача за username
        const candidate = await User.findOne({ username });

        if (candidate) {
            // Перевіряємо пароль
            const samePass = await bcrypt.compare(password, candidate.password);
            if (samePass) {
                // Зберігаємо потрібні дані у сесії
                req.session.user = {
                    id: candidate._id,
                    username: candidate.username,
                    roles: candidate.role,
                    name: candidate.name,          // Додаємо ім'я
                    surname: candidate.surname,    // Додаємо прізвище
                    status: candidate.status       // Додаємо статус
                };
                req.session.isAuthenticated = true;

                // Зберігаємо сесію та перенаправляємо користувача
                req.session.save((err) => {
                    if (err) {
                        console.error('Помилка збереження сесії:', err);
                        return res.status(500).send('Помилка збереження сесії');
                    }
                    res.redirect('/news'); 
                });
            } else {
                // Невірний пароль
                res.redirect('/login');
            }
        } else {
            // Користувач не знайдений
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