require('dotenv').config()

module.exports = {
    HOST: process.env.HOST,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    DB: process.env.DB,
    dialet: process.env.DIALECT,
    pool: {
        max: parseInt(process.env.POOL_MAX),
        min: parseInt(process.env.POOL_MIN),
        acquire: parseInt(process.env.ACQUIRE),
        idle: parseInt(process.env.POOL_IDLE),
    }
}