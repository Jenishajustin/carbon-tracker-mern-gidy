const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  from: { type: String, required: true },
  to: { type: String, required: true },
  distance: { type: String, required: true }, // Example: "12.5 km"
  duration: { type: String, required: true }, // Example: "15 mins"
  carbonEmission: { type: Number, required: true }, // Emission in kg CO2
  vehicleType: { type: String, required: true }, // Example: "car", "bus", "bike"
  createdAt: { type: Date, default: Date.now },
});

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;
