require('dotenv').config()

module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": "localhost",
    "dialect": "postgres",
    "port": 35432
  },
  "test": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": "postgres",
    "port": 5432
  },
  "production": {
    "username": process.env.DB_USER,
    "password": 123456,
    "database": process.env.DB_NAME,
    "host":     "127.0.0.1",
    "dialect": "postgres",
    "port": 5432
  }
};
