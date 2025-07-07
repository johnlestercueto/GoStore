const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000;

/*const corsOptions = {
  origin: 'http://localhost:5173', // or kung deployed, e.g. 'https://your-frontend.com'
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // optional: anong HTTP methods lang allowed
  credentials: true         // optional: kung kailangan mag-send ng cookies

  //app.use(cors(corsOptions));

};*/

//middleware
const app = express();

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));


app.get('/', (req, res)=> {
    res.send('hello world')
});

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/products', require('./routes/productRoutes'));

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