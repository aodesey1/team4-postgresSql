
const initOptions = {/* initialization options */};
const pgp = require ('pg-promise')
(initOptions);

const pgp = require('pg-promise');

const connectionConfig = {
  host: 'localhost',
  port: 3000,
  database: 'your_database_name', //Name of the database
  user: 'your_username', //username from PGAdmin
  password: 'your_password' //password from PGAdmin
};

const db = pgp(connectionConfig)
