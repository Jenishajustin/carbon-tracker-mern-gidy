const axios = require("axios");
const Trip = require("../models/Trip"); 

const emissionFactors = {
  car: 0.12,    
  bus: 0.03,   
  bike: 0.00,   
  train: 0.06,  
  airplane: 0.25 
};

const calculateTrip = async (req, res) => {
  try {
    const { from, to, vehicleType } = req.body;

    if (!from || !to || !vehicleType) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    const url = `https://maps.gomaps.pro/maps/api/distancematrix/json?origins=${encodeURIComponent(from)}&destinations=${encodeURIComponent(to)}&key=${apiKey}`;

    const response = await axios.get(url);
    console.log("API Response:", response.data);

    if (!response.data.rows || response.data.rows.length === 0) {
      return res.status(500).json({ message: "Invalid response from Google API" });
    }

    const elements = response.data.rows[0].elements;
    if (!elements || elements.length === 0 || !elements[0].distance) {
      return res.status(500).json({ message: "No distance data found" });
    }

    const distanceText = elements[0].distance.text; // Example: "12.5 km"
    const duration = elements[0].duration.text;
    const distanceValue = parseFloat(distanceText.replace(" km", "").replace(",", "")); // Convert to number

    // Calculate Carbon Emission
    const emissionFactor = emissionFactors[vehicleType] || 0;
    const carbonEmission = (distanceValue * emissionFactor).toFixed(2); // Round to 2 decimals

    // Save trip details to MongoDB
    const trip = new Trip({
      from,
      to,
      distance: distanceText,
      duration,
      carbonEmission,
      vehicleType
    });

    await trip.save();

    res.json({ from, to, distance: distanceText, duration, carbonEmission, vehicleType });
  } catch (error) {
    console.error("Error in calculateTrip:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { calculateTrip };