const express = require('express');
const { addRentCar, getRentCars } = require('../controllers/rentCar-controller');

const router = express.Router();

router.post('/rentCar', addRentCar);
router.get('/rentCar', getRentCars);

module.exports = router;
