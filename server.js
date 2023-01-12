const express = require('express');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const collegeRoutes = require('./routes/college');
const classRoutes = require('./routes/class');
const studentRoutes = require('./routes/student');

mongoose.connect('mongodb://127.0.0.1:27017/SGL', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to MongoDB'))

app.use('/colleges', collegeRoutes);
app.use('/classes', classRoutes);
app.use('/students', studentRoutes);

app.use("/",(req,res)=>{
    res.send("Hello WORLD");
})

app.listen(8000,()=>{
    console.log("Server running on localhost:8000");
})