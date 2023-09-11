const Sequelize = require('sequelize');
const process = require('process');
const env = process.env.NODE_ENV || 'development';
const db = {};
require ('dotenv').config();

let sequelizeOptions = {
  dialect: 'postgres',
  protocol: 'postgres', // Specify the protocol explicitly
  logging: true, 
};
if (process.env.DATABASE_URL) {
    const url = new URL(process.env.DATABASE_URL);
    const dialect = url.protocol.replace(':', ''); // Remove the trailing colon
  
    sequelizeOptions = {
      ...sequelizeOptions,
      dialect,
      host: url.hostname,
      port: url.port,
      username: url.username,
      password: url.password,
      database: url.pathname.replace('/', ''),
      ssl: true, 
      dialectOptions: {
        ssl: {
          require: true, 
          rejectUnauthorized: false,
        },
      },
    };
  } else {
  // If you have a local development database, configure it here
  sequelizeOptions = {
    ...sequelizeOptions,
    dialect:process.env.DIALECT,
    host: process.env.HOST,
    port: 5432,
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    ssl: false,
    dialectOptions: {
      ssl: {
        require: false,
      },
    },
  };
}

const sequelize = new Sequelize(sequelizeOptions);

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Person = require('./person.models.js')(sequelize, Sequelize);

module.exports = db;
