import { DataTypes } from "sequelize"; 

import db from "../db/connection";


const Usuario = db.define('Usuario',{
    nombre : {
        type : DataTypes.STRING
    },
    estado : {
        type : DataTypes.STRING
    },
    email : {
        type : DataTypes.BOOLEAN
    }
});

export default Usuario;