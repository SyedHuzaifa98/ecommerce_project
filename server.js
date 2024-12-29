const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv')
const { connectDB } = require('./config/db');
const morgan = require('morgan');

// config env
dotenv.config()

// connect to database
connectDB();


// rest object
const app = express();

//middlewares
app.use(express.json());// in request we can also send json format ,here we are enabling it
app.use(morgan('dev'));

// rest api
app.get('/', (req, res) => {
    res.send("<h1>Welcome to Ecommerce Application</h1>");
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on ${process.env.DEV_MOD} mode on PORT : ${PORT}`.bgCyan.white);
});
