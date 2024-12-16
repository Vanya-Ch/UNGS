const express = require('express');
const { exportData} = require("../controllers/getDataRent-controller");
const router = express.Router();

router.get('/export-rentals', exportData)

module.exports = router;