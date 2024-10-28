const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;
const vehicleData = require('./data.json')
// Use CORS middleware
app.use(cors({origin: "https://sarth1116.github.io"})); // Enable CORS for all routes

// Fetch vehicle data based on the date
app.get('/api/route/:date', (req, res) => {
    const date = req.params.date;
    if (vehicleData[date]) {
        res.json(vehicleData[date]);
    } else {
        res.status(404).send("No data found for this date");
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
