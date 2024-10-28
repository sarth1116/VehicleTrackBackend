const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express(); // This line initializes your Express app
const port = 4000;

// Use CORS middleware
app.use(cors()); // Enable CORS for all routes

// Fetch vehicle data based on the date
app.get('/api/route/:date', (req, res) => {
    const date = req.params.date;
    const dataPath = path.join(__dirname, 'data.json');
    
    // Read and parse data.json dynamically
    fs.readFile(dataPath, 'utf-8', (err, data) => {
        if (err) {
            console.error("Error reading data.json:", err);
            res.status(500).send("Internal server error");
            return;
        }
        
        const vehicleData = JSON.parse(data);
        
        if (vehicleData[date]) {
            res.json(vehicleData[date]);
        } else {
            res.status(404).send("No data found for this date");
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
