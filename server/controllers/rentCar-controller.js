const RentCar = require('../models/rentCar');

const handleError = (res, error) => {
    res.status(500).json({ error });
};

const isDriverAvailable = async (driver, startTime, endTime) => {
    const existingBooking = await RentCar.findOne({
        driver: driver,
        $or: [
            { 'time.startTime': { $lt: endTime }, 'time.endTime': { $gt: startTime } }  
        ]
    });
    return !existingBooking;  
};

const isCarAvailable = async (car, startTime, endTime) => {
    const existingBooking = await RentCar.findOne({
        car: car,
        $or: [
            { 'time.startTime': { $lt: endTime }, 'time.endTime': { $gt: startTime } }  
        ]
    });
    return !existingBooking;  
};

const addRentCar = async (req, res) => {
    const { car, driver, startPoint, destination, time, comment, passanger, typeOfTravel } = req.body;
    const { startTime, endTime } = time[0];

    const now = new Date(); // Поточна дата і час
    now.setHours(0, 0, 0, 0); // Обнулюємо час для порівняння лише дати

    // Перевірка, що початковий час не раніше сьогоднішнього дня
    if (new Date(startTime) < now) {
        return res.status(400).json({ error: 'Початковий час не може бути раніше сьогоднішнього дня' });
    }
    
    if (new Date(endTime) <= new Date(startTime)) {
        return res.status(400).json({ error: 'Кінцевий час не може бути раніше або рівний початковому часу' });
    }
    const driverAvailable = await isDriverAvailable(driver, startTime, endTime);

    if (!driverAvailable) {
        return res.status(400).json({ error: 'Водій зайнятий у цей час' });
    }

    const carAvailable = await isCarAvailable(car, startTime, endTime);

    if (!carAvailable) {
        return res.status(400).json({ error: 'Авто зайняте у цей час' });
    }

    const newRentCar = new RentCar({
        car,
        driver,
        startPoint,
        destination,
        time: [{ startTime, endTime }],
        comment,
        passanger,
        typeOfTravel
    });

    newRentCar.save()
        .then(result => res.status(201).json(result))
        .catch(err => handleError(res, err));
};

const getRentCars = (req, res) => {
    RentCar.find()
      .then((infos) => {
        res.status(200).json(infos);
      })
      .catch((err) => handleError(res, err));
  };

module.exports = { addRentCar, getRentCars };

