const mongoose = require('mongoose');
 
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://johnlestercueto:johnlestercueto@cluster0.roadamg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log('MongoDB connected!')
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;