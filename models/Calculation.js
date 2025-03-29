const mongoose = require('mongoose');

// Define the schema
const calculationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  commuteDistance: { type: Number, required: true },
  vehicleType: { type: String, required: true },
  electricityUsage: { type: Number, required: true },
  dietType: { type: String, required: true },
  carbonFootprint: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Create the model
const Calculation = mongoose.model('Calculation', calculationSchema);

module.exports = Calculation;
