import { Sequelize } from "sequelize";

const db = new Sequelize('daniel_macpui_db', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;