require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const contactRoutes = require('./routes/contact');

const app = express()

// middleware
app.use(express.json())

app.use(cors());

// globle middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/', contactRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for request
        app.listen(process.env.PORT, () => {
            console.log("Connected to db & Server is running on port", process.env.PORT);
        });
    })
    .catch((error) => {
        console.log(error)
    })
