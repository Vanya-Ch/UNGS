const bcrypt = require("bcryptjs");
const User = require('../models/User');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* // Функція для створення користувача
async function createUser(username, password, role, name, surname, fullname, position = '', department = '', mail = '', phone = '') {
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
    // Створення облікових записів для директорів
    for (const director of directors) {
        const username = director.contacts.mail.split('@')[0];
        const [surname, name, patronymic] = director.name.split(' ');

        await createUser(
            username,
            'qwertyui',
            ['user', 'directors'],
            name,
            surname,
            director.name,
            director.position,
            'directors',
            director.contacts.mail,
            director.contacts.phone
        );
    }

    // Створення облікових записів для сервісного управління
    for (const manager of serviceManagement) {
        const username = manager.contacts.mail.split('@')[0];
        const [surname, name, patronymic] = manager.name.split(' ');

        await createUser(
            username,
            'qwertyui',
            ['user', 'serviceManagement'],
            name,
            surname,
            manager.name,
            manager.position,
            'serviceManagement',
            manager.contacts.mail,
            manager.contacts.phone
        );
    }

    // Створення облікових записів для інженерів з буріння
    for (const engineer of drilling) {
        const username = engineer.contacts.mail.split('@')[0];
        const [surname, name, patronymic] = engineer.name.split(' ');

        await createUser(
            username,
            'qwertyui',
            ['user', 'drilling'],
            name,
            surname,
            engineer.name,
            engineer.position,
            'drilling',
            engineer.contacts.mail,
            engineer.contacts.phone
        );
    }

    // Створення працівників технічного відділу
    for (const technicalWorker of technical) {
        const username = technicalWorker.contacts.mail.split('@')[0];
        const [surname, name, patronymic] = technicalWorker.name.split(' ');

        await createUser(
            username,
            'qwertyui',
            ['user', 'technical'],
            name,
            surname,
            technicalWorker.name,
            technicalWorker.position,
            'technical',
            technicalWorker.contacts.mail,
            technicalWorker.contacts.phone
        );
    }

    // Створення працівників цехового обслуговування
    for (const craftWorker of craftService) {
        const username = craftWorker.contacts.mail.split('@')[0];
        const [surname, name, patronymic] = craftWorker.name.split(' ');

        await createUser(
            username,
            'qwertyui',
            ['user', 'craftService'],
            name,
            surname,
            craftWorker.name,
            craftWorker.position,
            'craftService',
            craftWorker.contacts.mail,
            craftWorker.contacts.phone
        );
    }

    // Створення працівників фінансового відділу
    for (const financeWorker of finance) {
        const username = financeWorker.contacts.mail.split('@')[0];
        const [surname, name, patronymic] = financeWorker.name.split(' ');

        await createUser(
            username,
            'qwertyui',
            ['user', 'finance'],
            name,
            surname,
            financeWorker.name,
            financeWorker.position,
            'finance',
            financeWorker.contacts.mail,
            financeWorker.contacts.phone
        );
    }

     // Створення працівників транспорту
    for (const driver of transport) {
        const username = driver.contacts.mail.split('@')[0];
        const [surname, name, patronymic] = driver.name.split(' ');

        await createUser(
            username,                           // Логін
            'qwertyui',                         // Пароль
            ['user', 'driver'],                 // Роль
            name,                               // Ім'я
            surname,                            // Прізвище
            driver.name,                        // Повне ім'я
            driver.position,                    // Посада
            'transport',                        // Департамент
            driver.contacts.mail,               // Пошта
            driver.contacts.phone               // Телефон
        );
    }

    // Створення працівників комерційного відділу
    for (const commercialWorker of commercial) {
        const username = commercialWorker.contacts.mail.split('@')[0];
        const [surname, name, patronymic] = commercialWorker.name.split(' ');

        await createUser(
            username,
            'qwertyui',
            ['user', 'commercial'],
            name,
            surname,
            commercialWorker.name,
            commercialWorker.position,
            'commercial',
            commercialWorker.contacts.mail,
            commercialWorker.contacts.phone
        );
    }

    // Створення HR-працівників
    for (const hrWorker of recruiters) {
        const username = hrWorker.contacts.mail.split('@')[0];
        const [surname, name, patronymic] = hrWorker.name.split(' ');

        await createUser(
            username,
            'qwertyui',
            ['user', 'hr'],
            name,
            surname,
            hrWorker.name,
            hrWorker.position,
            'hr',
            hrWorker.contacts.mail,
            hrWorker.contacts.phone
        );
    }

    // Створення бухгалтерів
    for (const accountant of accountants) {
        const username = accountant.contacts.mail.split('@')[0];
        const [surname, name, patronymic] = accountant.name.split(' ');

        await createUser(
            username,                           // Логін
            'qwertyui',                         // Пароль
            ['user', 'accountant'],             // Роль
            name,                               // Ім'я
            surname,                            // Прізвище
            accountant.name,                    // Повне ім'я
            accountant.position,                // Посада
            'accounting',                       // Департамент
            accountant.contacts.mail,           // Пошта
            accountant.contacts.phone           // Телефон
        );
    }

    // Створення інженера з охорони праці
    for (const safe of safeKeeper) {
        const username = safe.contacts.mail.split('@')[0];
        const [surname, name, patronymic] = safe.name.split(' ');

        await createUser(
            username,
            'qwertyui',
            ['user', 'safe_keeper'],
            name,
            surname,
            safe.name,
            safe.position,
            'safety',
            safe.contacts.mail,
            safe.contacts.phone
        );
    }

    // Створення працівників оптимізації
    for (const optimizer of optimization) {
        const username = optimizer.contacts.mail.split('@')[0];
        const [surname, name, patronymic] = optimizer.name.split(' ');

        await createUser(
            username,
            'qwertyui',
            ['user', 'optimization'],
            name,
            surname,
            optimizer.name,
            optimizer.position,
            'optimization',
            optimizer.contacts.mail,
            optimizer.contacts.phone
        );
    }

    // Створення адміністративного персоналу
    for (const admin of adminGosp) {
        const username = admin.contacts.mail.split('@')[0];
        const [surname, name, patronymic] = admin.name.split(' ');

        await createUser(
            username,
            'qwertyui',
            ['user', 'admin_gosp'],
            name,
            surname,
            admin.name,
            admin.position,
            'admin_gosp',
            admin.contacts.mail,
            admin.contacts.phone
        );
    }
})();
 */




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
                    name: candidate.name,          
                    surname: candidate.surname,    
                    status: candidate.status       
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