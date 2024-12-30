const express = require("express");
const { loadEnvVariables } = require("./config/env");
const emailRoutes = require("./routes/emailRoutes");


loadEnvVariables();

// Load environment variables

const app = express();
app.use(express.json()); // Middleware to parse JSON request bodies

// Mount routes
app.use("/api", emailRoutes);

// Centralized Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
