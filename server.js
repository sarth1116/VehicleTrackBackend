const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

app.use(cors()); // Enable CORS for all routes

// Define the /api/route endpoint
app.get('/api/route', (req, res) => {
    // Read data from a JSON file or any data source
    fs.readFile(__dirname + './data/dummy.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading data:', err);
            return res.status(500).send('Error reading data');
        }
        res.json(JSON.parse(data)); // Send the data as JSON response
    });
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
