import express from 'express';
import { userLogin, verifyOTP } from '../controllers/userController.js'

const router = express.Router();


// Public ROutes
router
    .post("/login", userLogin)
    .post("/verify", verifyOTP)


export default router