const User = require('../models/User');

// Get user profile
exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update user profile
exports.updateUserProfile = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      country,
      city,
      postal,
      carbonData,
      preferences
    } = req.body;
    
    // Find user and update
    const user = await User.findById(req.user.id);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    // Update fields if provided
    if (name) user.name = name;
    if (email) user.email = email;
    if (phone) user.phone = phone;
    if (country) user.country = country;
    if (city) user.city = city;
    if (postal) user.postal = postal;
    
    // Update carbon data if provided
    if (carbonData) {
      user.carbonData = {
        current: carbonData.current || user.carbonData?.current,
        target: carbonData.target || user.carbonData?.target,
        timeline: carbonData.timeline || user.carbonData?.timeline
      };
    }
    
    // Update preferences if provided
    if (preferences) {
      user.preferences = {
        newsletter: preferences.newsletter !== undefined ? preferences.newsletter : user.preferences?.newsletter,
        notifications: preferences.notifications !== undefined ? preferences.notifications : user.preferences?.notifications,
        reports: preferences.reports !== undefined ? preferences.reports : user.preferences?.reports,
        tips: preferences.tips !== undefined ? preferences.tips : user.preferences?.tips
      };
    }
    
    // Save updated user
    await user.save();
    
    // Return updated user without password
    const updatedUser = await User.findById(req.user.id).select('-password');
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
