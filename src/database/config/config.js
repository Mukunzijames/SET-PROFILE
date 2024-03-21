import dotenv from 'dotenv';
dotenv.config()
module.exports={
 "development": {
    "username": "postgres",
    "password": "postgres",
    "database": "postgres",
    "port": 5432,
    "host": "localhost",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}






