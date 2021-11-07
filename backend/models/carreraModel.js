import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Carrera = db.define('carrera', {
    Nombre: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

export default Carrera;