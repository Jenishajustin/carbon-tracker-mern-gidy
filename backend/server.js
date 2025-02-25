require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();
const tripRoutes = require("./routes/tripRoutes");

const app = express();
app.use(express.json());
app.use(cors());


connectDB();


app.use("/api/trips", tripRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
