const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static("."));

// Serve the main HTML file at root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "nexify-premium-landing.html"));
});

// Fallback to serve the HTML file for any route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "nexify-premium-landing.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
