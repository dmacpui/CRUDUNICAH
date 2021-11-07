import express from "express";

import {
    getAllCarreras,
    createCarrera,
    getCarreraById,
    updateCarrera,
    deleteCarrera
} from "../controllers/Carreras.js";


const router = express.Router();

router.get('/', getAllCarreras);
router.get('/:id', getCarreraById);
router.post('/', createCarrera);
router.patch('/:id', updateCarrera);
router.delete('/:id', deleteCarrera);

export default router;