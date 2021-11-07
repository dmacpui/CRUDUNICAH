import express from "express";

import {
    getAllAlumnos,
    createAlumno,
    getAlumnoById,
    updateAlumno,
    deleteAlumno
} from "../controllers/Alumnos.js";


const router = express.Router();

router.get('/', getAllAlumnos);
router.get('/:id', getAlumnoById);
router.post('/', createAlumno);
router.patch('/:id', updateAlumno);
router.delete('/:id', deleteAlumno);

export default router;