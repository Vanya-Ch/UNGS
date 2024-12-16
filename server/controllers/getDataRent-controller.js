const ExcelJS = require('exceljs');
const fs = require('fs');
const RentCar = require('../models/rentCar')
const path = require('path');

const exportData = async (req, res) => {
    const { year, month } = req.query;

    if (!year || !month) {
        return res.status(400).send('Параметри year і month є обов’язковими.');
    }

    try {
        // Створення початку і кінця місяця у форматі ISO
        const startDate = new Date(Date.UTC(year, month - 1, 1, 0, 0, 0));
        const endDate = new Date(Date.UTC(year, month, 0, 23, 59, 59));

        // Логування для перевірки дат
        console.log('startDate:', startDate);
        console.log('endDate:', endDate);

        const allRentals = await RentCar.find();
        console.log('Усі записи:', JSON.stringify(allRentals, null, 2));

        const rentals = await RentCar.find({
            "time.startTime": { 
              $gte: startDate, 
              $lte: endDate 
            },
          });
          
          console.log('Знайдені записи:', JSON.stringify(rentals, null, 2));
          

        if (rentals.length === 0) {
            return res.status(404).send('Записи за цей період не знайдено.');
        }

        // Створення Excel-файлу
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Rentals');

        worksheet.columns = [
            { header: 'Водій', key: 'driver', width: 20 },
            { header: 'Пасажир', key: 'passanger', width: 20 },
            { header: 'Куди', key: 'destination', width: 30 },
        ];

        // Додавання даних до таблиці
        rentals.forEach((rental) => {
            worksheet.addRow({
                driver: rental.driver,
                passanger: rental.passanger,
                destination: rental.destination,
            });
        });

        // Зберігаємо файл на сервері
        const filePath = path.join(__dirname, 'exports', `rentals_${year}_${month}.xlsx`);
        await workbook.xlsx.writeFile(filePath);

        // Відправляємо файл без видалення
        res.download(filePath, (err) => {
            if (err) {
                console.error('Помилка при завантаженні файлу:', err);
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Виникла помилка на сервері.');
    }
};

module.exports = { exportData }