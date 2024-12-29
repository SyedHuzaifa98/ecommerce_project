const mongoose = require('mongoose');
const express =  require('express');
const dotenv = require('dotenv');
const connectDB =  async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to Mongodb Database ${conn.connection.host}`);

    } catch (error) {
        console.log(`Error in Mongodb connection: ${error}`);
    }
}

module.exports = {
    connectDB
}