const express = require("express");
const cors = require("cors");
const app = express();
const port = 5500; // Change this to your desired port

// Use CORS middleware to allow requests from all origins
app.use(cors());

// Serve static files from the current directory
app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
