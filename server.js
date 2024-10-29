const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();

// Configure CORS to allow requests from your frontend
const corsOptions = {
    origin: 'https://vehicle-track-frontend.vercel.app', // Replace with your frontend URL
    methods: ['GET'], // Specify allowed methods
    credentials: true, // Allow credentials if needed (like cookies, authorization headers)
};

app.use(cors(corsOptions)); // Enable CORS for all routes with specified options

app.get("/api/route", (req, res) => {
    fs.readFile(__dirname + "/backend/data/data.json", "utf8", (err, data) => {
        if (err) {
            console.error("Error reading data:", err);
            return res.status(500).send("Error reading data");
        }
        res.send(JSON.parse(data)); // Send JSON response
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
