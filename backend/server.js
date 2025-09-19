const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

//connect to mongodb
//Note:we'll use alocaldatabase for now,and a render-managed one later

const url=process.env.MONGODB_URL || 'mongodb://localhost:27017/ecommerce';
mongoose.connect(url)
.then(()=>console.log('Connected to MongoDB'))
.catch(err=>console.error('MongoDB connection error:',err));

app.get('/',(req,res)=>{
    res.send('Backend is running');
});

app.listen(PORT,()=>{
    console.log('server is running on port', $(PORT));
})