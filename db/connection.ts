import {Sequelize} from 'sequelize' ;

const db = new Sequelize('typescript','root','Zmqp2190.',{
    host:'localhost',
    dialect:'mysql',
    //logging: false
})

export default db;
