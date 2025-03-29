const Calculation = require('../models/Calculation');

exports.calculateCarbonFootprint = async (req, res) => {
  const { commuteDistance, vehicleType, electricityUsage, dietType } = req.body;

  // Validate input data
  if (!commuteDistance || !vehicleType || !electricityUsage || !dietType) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Carbon footprint calculation logic
    let carbonFootprint =
      commuteDistance * (vehicleType === 'Car' ? 0.21 : vehicleType === 'Public Transport' ? 0.05 : 0);
    carbonFootprint += electricityUsage * 0.45;
    carbonFootprint += dietType === 'Meat daily' ? 3 : dietType === 'Vegetarian' ? 1 : dietType === 'Vegan' ? 0.5 : 2;

    // Save calculation to database
    const calculation = await Calculation.create({
      userId: req.user.id,
      commuteDistance,
      vehicleType,
      electricityUsage,
      dietType,
      carbonFootprint,
    });

    res.status(201).json({ message: 'Calculation saved successfully', calculation });
  } catch (error) {
    console.error('Error creating calculation:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
