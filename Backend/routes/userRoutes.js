const express = require('express');
const { userLogin, verifyOTP } = require('../controllers/userController.js');

const router = express.Router();

// Public ROutes
router
    .post("/login", userLogin)
    .post("/verify", verifyOTP)


module.exports = router;