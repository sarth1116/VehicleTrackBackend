const express = require("express");
const fs = require("fs"); // For reading data from the filesystem
const cors = require("cors"); // To allow cross-origin requests

const app = express();

// Enable CORS for specific frontend origin
app.use(cors({
    origin: "https://vehicle-track-frontend.vercel.app" // Replace with your frontend origin
}));

// Route to get the vehicle location data
app.get("/api/route", (req, res) => {
    // Read vehicle location data from data.json
    fs.readFile(__dirname + "/data.json", "utf8", (err, data) => {
        if (err) {
            console.error("Error reading data file:", err);
            return res.status(500).json({ error: "Failed to load data" }); // Send error response
        }
        res.json(JSON.parse(data)); // Send JSON-parsed data as the response
    });
});

const PORT = process.env.PORT || 3000; // Define the server's port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); // Log server status
});
