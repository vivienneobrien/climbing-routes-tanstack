const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    password: "",
    host: "localhost",
    post: 5432,
    database: "climbingroutestodo"
})

module.exports = pool;