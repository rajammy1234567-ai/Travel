const express = require('express');
const cors = require('cors');
const connectDB = require('../backend/config/db');
 require('dotenv').config();
const authRoutes = require('./routes/authRoutes');


const app = express();
connectDB();


app.use(cors());
app.use(express.json());

app.use('/api/auth' , authRoutes)
app.use('/api/payment' , require('../backend/routes/payment'))

const PORT = 3000

app.listen((PORT) , () =>{
  console.log(`Server is running on the port ${PORT}`)
})