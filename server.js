const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();

// Enable CORS for all routes
// Replace '*' with your frontend URL for better security
app.use(cors({
    origin: 'https://vehicle-track-frontend.vercel.app' // Update to your frontend URL
}));


app.get("/api/route", (req, res) => {
    // Path to the JSON data file
    const dataPath = __dirname + "/data/data.json"; // Adjust the path if necessary

    // Read vehicle location data from data.json
    fs.readFile(dataPath, "utf8", (err, data) => {
        if (err) {
            console.error("Error reading data:", err);
            return res.status(500).send("Error reading data");
        }

        res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
        res.send(JSON.parse(data)); // Send the parsed JSON data
    });
});

// Define the server's port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); // Log server status
});
