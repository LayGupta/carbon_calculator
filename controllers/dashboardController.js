const Calculation = require('../models/Calculation');

exports.getUserCalculations = async (req, res) => {
  try {
    // Fetch calculations for the authenticated user
    const calculations = await Calculation.find({ userId: req.user.id }).sort({ createdAt: -1 });

    if (!calculations.length) {
      return res.status(404).json({ message: 'No calculations found for this user' });
    }

    res.status(200).json(calculations);
  } catch (error) {
    console.error('Error fetching calculations:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
