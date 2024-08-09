const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// MongoDB Connection
mongoose.connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB Connection Succeeded.');
}).catch(error => {
    console.log('Error in DB connection: ' + error);
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const itemRoutes = require('./routes/items');
app.use('/api/items', itemRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`App running on port: ${PORT}`);
});
