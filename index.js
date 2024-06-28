import express from 'express';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import pg from 'pg';

// Test
const { Pool } = pg;

const app = express();
const port = process.env.PORT || 3002;

app.use(bodyParser.json());

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// Log when the database is connected
pool.on('connect', () => {
    console.log('Connected 1 to the PostgreSQL database');
});

// Retry connection on startup
const connectWithRetry = () => {
    pool.query('SELECT NOW()', (err, res) => {
        if (err) {
            console.error('Error connecting to the database:', err);
            setTimeout(connectWithRetry, 5000); // Retry after 5 seconds
        } else {
            console.log('Database connection successful. Current time is:', res.rows[0].now);
        }
    });
};

connectWithRetry();

app.get('/', (req, res) => {
    res.send("<h1>Hello World! This is env test 2</h1>");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});