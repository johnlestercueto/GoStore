const express = require('express');
const connectDB = require('./config/db')

const PORT = 5000;

connectDB();
//middleware
const app = express();

//route
app.get('/', (req, res)=> {
    res.send('hello world')
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});