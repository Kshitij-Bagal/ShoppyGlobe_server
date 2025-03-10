const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const { protect, authorize } = require('../middleware/authMiddleware');

const router = express.Router();
const generateToken = (userId) => jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1d' });

// Fetch all users (admin-only route, requires authorization)
router.get('/', protect, authorize('admin'), async (req, res) => {
    try {
        const users = await User.find().select('-password');  // Exclude the password field
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching users', error: err.message });
    }
});

// 🟩 Public route (for testing)
router.get('/public', (req, res) => {
    res.json({ message: 'Public route, no token needed' });
});

// 🔒 User profile (protected)
router.get('/profile', protect, async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select('-password');
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching profile', error: err.message });
    }
});

// 🟩 Register a new user (with password hashing)
router.post('/register', async (req, res) => {
    try {
        const { firstName, lastName, email, username, password, phone, age, gender, address, company } = req.body;

        // Ensure required fields are provided
        if (!firstName || !lastName || !email || !username || !password) {
            return res.status(400).json({ message: 'Required fields are missing' });
        }

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: 'User already exists' });

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the user with default empty values for optional fields
        const user = new User({
            firstName,
            lastName,
            email,
            username,
            password: hashedPassword,
            phone,
            age,
            gender: gender || '',  // Default to empty if not provided
            address: address || {}, // Default to empty object if not provided
            company,
        });

        await user.save();

        const token = generateToken(user._id);
        res.status(201).json({ user, token });
    } catch (err) {
        res.status(500).json({ message: 'Error registering user', error: err.message });
    }
});

// ❌ Delete user by ID (admin-only route)
router.delete('/:userId', protect, authorize('admin'), async (req, res) => {
    try {
        const { userId } = req.params;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        await User.findByIdAndDelete(userId);
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting user', error: err.message });
    }
});

// 🟨 Update user role (admin-only)
router.put('/:userId/role', protect, authorize('admin'), async (req, res) => {
    try {
        const { userId } = req.params;
        const { role } = req.body;

        if (!role) {
            return res.status(400).json({ message: 'Role is required' });
        }

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.role = role;
        await user.save();

        res.status(200).json({ message: 'User role updated successfully', user });
    } catch (err) {
        res.status(500).json({ message: 'Error updating role', error: err.message });
    }
});


// 🔑 Login user
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = generateToken(user._id);
        res.status(200).json({ user, token });
    } catch (err) {
        res.status(500).json({ message: 'Error logging in', error: err.message });
    }
});

// 🟨 Update user profile (with password hashing)
router.put('/profile', protect, async (req, res) => {
    try {
        const updates = { ...req.body };

        // Hash password if user is updating it
        if (req.body.password) {
            updates.password = await bcrypt.hash(req.body.password, 10);
        }

        const updatedUser = await User.findByIdAndUpdate(req.user._id, updates, { new: true, runValidators: true }).select('-password');
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json({ message: 'Error updating profile', error: err.message });
    }
});

// ❌ Delete user
router.delete('/profile', protect, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.user._id);
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting user', error: err.message });
    }
});

module.exports = router;
