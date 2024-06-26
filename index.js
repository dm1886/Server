import express from 'express';

const app = express();
const port = process.env.PORT || 3002;

app.get('/', (req, res) => {
    res.send("<h1>Hello World! Im ONLINE with new test mac dcker</h1>" );
  
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});