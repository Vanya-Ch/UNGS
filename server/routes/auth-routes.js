const express = require('express');
const { postLogout, postLogin} = require("../controllers/auth-controller");
const router = express.Router();

router.post('/login', postLogin);
router.post('/logout', postLogout);

module.exports = router;