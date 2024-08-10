require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const ticketRoutes = require('./routes/ticketRoutes');
const cors = require('cors');

const app = express();


app.use(express.json());
app.use(cors());

app.use('/api', ticketRoutes);
// console.log(process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB', err);
});


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
