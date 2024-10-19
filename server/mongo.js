const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors")

const app = express();
app.use(cors())
app.use(bodyParser.json())
// app.unsubscribe(bodyParser.json())

mongoose.connect( "mongodb+srv://akshayshindepatil000:Akshay2409@cluster0.6npuwg6.mongodb.net/mydb",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

const userRoutes = require('./index');
app.use('/api/index',userRoutes)

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

