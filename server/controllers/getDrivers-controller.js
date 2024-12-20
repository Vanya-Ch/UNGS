const express = require('express');
const router = express.Router();
const User = require('../models/User');


router.get('/users/drivers', async (req, res) => {
    try {
        const drivers = await User.find({ role: 'driver' }, 'name surname duty');
        res.status(200).json(drivers);
    } catch (error) {
        console.error('Помилка отримання водіїв:', error);
        res.status(500).json({ message: 'Помилка отримання даних' });
    }
});

router.patch('/users/:id/duty', async (req, res) => {
    const { id } = req.params;
    const { duty } = req.body;

    try {
        if (!['черговий', 'додатковий черговий', 'не черговий'].includes(duty)) {
            return res.status(400).json({ message: 'Невірне значення duty' });
        }

        const user = await User.findByIdAndUpdate(
            id,
            { duty },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({ message: 'Користувача не знайдено' });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error('Помилка оновлення duty:', error);
        res.status(500).json({ message: 'Помилка сервера' });
    }
});

module.exports = router;