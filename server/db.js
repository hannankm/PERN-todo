const Pool = require("pg").Pool;

// pg library makes it easy to connect a databse to a server

const pool = new Pool({
    user: "postgres",
    password: " ",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;