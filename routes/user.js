import express from 'express';
import userController from '../controllers/user.js';
const { getLogin, getRegister, register, logOut, login } = userController

const router = express.Router();

router.get('/register', getRegister);
router.get('/login', getLogin);
router.post('/login', login)
router.post('/register', register)
router.get('/log-out', logOut);

export default router;