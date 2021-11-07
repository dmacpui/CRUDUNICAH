import Carrera from "../models/carreraModel.js";

export const getAllCarreras = async(req, res) => {
    try {
        const carreras = await Carrera.findAll();
        res.json(carreras);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getCarreraById = async(req, res) => {
    try {
        const carreras = await Carrera.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(carreras[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const createCarrera = async(req, res) => {
    try {
        await Carrera.create(req.body);
        res.json({
            "message": "Carrera Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const updateCarrera = async(req, res) => {
    try {
        await Carrera.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Carrera Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const deleteCarrera = async(req, res) => {
    try {
        await Carrera.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Carrera Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}