const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.TEXTSTORE_HOST || 'database',
    port: 5432,
    user: 'postgres',
    password: "postgres",
    database:'toartistdb'
});

module.exports = pool;