import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Alumno = db.define('alumnos', {
    Nombre: {
        type: DataTypes.STRING
    },
    Cuenta: {
        type: DataTypes.STRING
    },
    Correo: {
        type: DataTypes.STRING
    },
    Carrera: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

export default Alumno;