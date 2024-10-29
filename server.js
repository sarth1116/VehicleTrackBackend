const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

// Load vehicle route data from data.json
const vehicleData = require('./data.json');

// Use CORS middleware
app.use(cors());

// Endpoint to get the vehicle route data
app.get('/api/route', (req, res) => {
    res.json(vehicleData); // Return the predefined route
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
