import express from 'express';
import carController from '../controllers/car.js';
import verifyToken from '../middleware/verifyToken.js';


const { getCars, addCar, addCarForm } = carController

const router = express.Router();

router.get('/', getCars)
router.get('/add-car-form', verifyToken, addCarForm)
router.post('/add-car', verifyToken, addCar)


export default router;
