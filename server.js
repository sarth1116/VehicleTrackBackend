const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();

app.use(cors()); // Enable CORS for all routes

app.get("/api/route", (req, res) => {
    fs.readFile(__dirname + "/data.json", "utf8", (err, data) => {
        if (err) {
            console.error("Error reading data:", err);
            return res.status(500).send("Error reading data");
        }
        res.setHeader('Access-Control-Allow-Origin', '*'); // Add CORS header
        res.send(JSON.parse(data));
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
