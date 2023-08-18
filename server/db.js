const { createPool } = require("mysql2/promise");
const { DB_HOST, DB_USER, DB_PORT, DB_PASSWORD, DB_DATABASE } = require("./config.js");

const pool = createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT,
  database: DB_DATABASE,
  ssl: {
    rejectUnauthorized: false,
  },
});

// Con pool vamos a poder hacer las consultas a la base de datos
module.exports = pool;