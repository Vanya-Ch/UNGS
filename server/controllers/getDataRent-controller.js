/* const ExcelJS = require('exceljs');
const RentCar = require('../models/rentCar');

const exportData = async (req, res) => {
    const { year, month } = req.query;

    if (!year || !month) {
        return res.status(400).send('Рік і місяць є обов’язковими.');
    }

    try {
        // Створення початку і кінця місяця у форматі ISO
        const startDate = new Date(Date.UTC(year, month - 1, 1, 0, 0, 0));
        const endDate = new Date(Date.UTC(year, month, 0, 23, 59, 59));

        // Отримуємо дані з бази даних
        const rentals = await RentCar.find({
            "time.startTime": {
                $gte: startDate,
                $lte: endDate
            }
        });

        if (rentals.length === 0) {
            return res.status(404).send('Записи за цей період не знайдено.');
        }

        // Генерація Excel-файлу
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Бронювання');

        worksheet.columns = [
            { header: 'Водій', key: 'driver', width: 20 },
            { header: 'Пасажир', key: 'passanger', width: 20 },
            { header: 'Пункт призначення', key: 'destination', width: 30 },
        ];

        // Додавання даних до таблиці
        rentals.forEach((rental) => {
            worksheet.addRow({
                driver: rental.driver,
                passanger: rental.passanger,
                destination: rental.destination,
            });
        });

        // Створюємо Buffer
        const buffer = await workbook.xlsx.writeBuffer();

        // Відправляємо файл у відповіді
        res.setHeader(
            'Content-Disposition',
            `attachment; filename="бронювання_${year}_${month}.xlsx"`
        );
        res.setHeader(
            'Content-Type',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        );
        res.send(buffer);
    } catch (error) {
        console.error(error);
        res.status(500).send('Виникла помилка на сервері.');
    }
};

module.exports = { exportData }; */

const ExcelJS = require('exceljs');
const RentCar = require('../models/rentCar');

const exportData = async (req, res) => {
    const { year, month } = req.query;

    if (!year || !month) {
        return res.status(400).send('Рік і місяць є обов’язковими.');
    }

    try {
        // Створення діапазону дат для пошуку записів
        const startDate = new Date(Date.UTC(year, month - 1, 1, 0, 0, 0));
        const endDate = new Date(Date.UTC(year, month, 0, 23, 59, 59));

        // Отримання даних із бази даних
        const rentals = await RentCar.find({
            "time.startTime": { $gte: startDate, $lte: endDate }
        });

        if (rentals.length === 0) {
            return res.status(404).send('Записи за цей період не знайдено.');
        }

        // Генерація Excel-файлу
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Rentals');

        worksheet.columns = [
            { header: 'Водій', key: 'driver', width: 30 },
            { header: 'Пасажир', key: 'passanger', width: 30 },
            { header: 'Пункт призначення', key: 'destination', width: 50 },
        ];

        // Додавання даних до таблиці
        rentals.forEach((rental) => {
            worksheet.addRow({
                driver: rental.driver,
                passanger: rental.passanger,
                destination: rental.destination,
            });
        });

        // Запис файлу у буфер
        const buffer = await workbook.xlsx.writeBuffer();

        // Відправка файлу клієнту
        res.setHeader(
            'Content-Disposition',
            `attachment; filename="rentals_${year}_${month}.xlsx"`
        );
        res.setHeader(
            'Content-Type',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        );

        res.send(buffer);
    } catch (error) {
        console.error('Помилка на сервері:', error);
        res.status(500).send('Виникла помилка на сервері.');
    }
};

module.exports = { exportData };
