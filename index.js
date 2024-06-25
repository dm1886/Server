import express from 'express';
import bodyParser from 'body-parser';
import bcryps from 'bcrypt';
import jwt from 'jsonwebtoken';
import pg from 'pg';


const app = express();
const port = process.env.PORT || 3002;
const secretKey = 'your_jwt_secret_key'; // Change this to a secure key

app.use(bodyParser.json());

// PostgreSQL connection


app.get('/', (req, res) => {
    res.send("<h1>Hello World! Im ONLINE with new test mac dcker</h1>" );
    
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});