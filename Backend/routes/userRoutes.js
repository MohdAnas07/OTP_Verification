import express from 'express';
import { userLogin } from '../controllers/userController.js'

const router = express.Router();


// Public ROutes
router
    .post("/login", userLogin)


export default router