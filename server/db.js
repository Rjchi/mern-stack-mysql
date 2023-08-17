const { createPool } = require("mysql2/promise");

const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mern',
});

// Con pool vamos a poder hacer las consultas a la base de datos
module.exports = pool;