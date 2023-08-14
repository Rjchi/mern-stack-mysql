const { createPool } = require("mysql2/promise");

const pool = createPool();

// Con pool vamos a poder hacer las consultas a la base de datos
module.exports = pool;