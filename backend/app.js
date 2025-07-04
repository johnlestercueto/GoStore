const express = require('express');
const connectDB = require('./config/db')
require('dotenv').config();

const PORT = process.env.PORT || 5000;


//middleware
const app = express();

//route
app.get('/', (req, res)=> {
    res.send('hello world')
});

//Start server only after DB connection
const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error.message);
    process.exit(1);
  }
};

startServer();