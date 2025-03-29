const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const { calculateCarbonFootprint } = require('../controllers/calcController');
const { getUserCalculations } = require('../controllers/dashboardController');
const { getUserProfile, updateUserProfile } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Authentication routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected routes (require authentication)
router.post('/calculate', protect, calculateCarbonFootprint);
router.get('/dashboard', protect, getUserCalculations);

// User profile routes
router.get('/user/profile', protect, getUserProfile);
router.put('/user/profile', protect, updateUserProfile);

module.exports = router;
