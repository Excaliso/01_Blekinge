const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.TEXTSTORE_HOST || 'database',
    port: 5432,
    user: 'postgres',
    password: "postgres",
    database:'toartistdb'
});

/* No "deadlock" when server starts*/
pool.on('error', (err) => {
    console.error("error, possibly server restart", err.message);
});

module.exports = pool;