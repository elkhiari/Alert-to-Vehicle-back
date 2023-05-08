const express = require('express');
const {connectToDb} = require('./db/config.db');
require('dotenv').config();
const app = express();

app.use(express.json());

const startingServer = (URI,PORT)=>{
    try {
        connectToDb(URI)
        app.listen(PORT,console.log("app is working "+PORT));
    } catch (error) {
        console.log(error)
    }
}


startingServer(process.env.URI,process.env.PORT)

