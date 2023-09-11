require('dotenv').config()

module.exports = {
  "development": {
    "username": process.env.POSTGRESQL_DB_USER,
    "password": process.env.POSTGRESQL_DB_PASSWORD,
    "database": process.env.POSTGRESQL_DB,
    "host": process.env.POSTGRESQL_DB_HOST,
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.POSTGRESQL_DB_USER,
    "password": process.env.POSTGRESQL_DB_PASSWORD,
    "database": process.env.POSTGRESQL_DB,
    "host": process.env.POSTGRESQL_DB_HOST,
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.POSTGRESQL_DB_USER,
    "password": process.env.POSTGRESQL_DB_PASSWORD,
    "database": process.env.POSTGRESQL_DB,
    "host": process.env.POSTGRESQL_DB_HOST,
    "dialect": "postgres"
  }
}
