import Alumno from "../models/alumnoModel.js";

export const getAllAlumnos = async(req, res) => {
    try {
        const alumnos = await Alumno.findAll();
        res.json(alumnos);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getAlumnoById = async(req, res) => {
    try {
        const alumnos = await Alumno.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(alumnos[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const createAlumno = async(req, res) => {
    try {
        await Alumno.create(req.body);
        res.json({
            "message": "Alumno Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const updateAlumno = async(req, res) => {
    try {
        await Alumno.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Alumno Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const deleteAlumno = async(req, res) => {
    try {
        await Alumno.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Alumno Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}