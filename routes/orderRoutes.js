const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const Order = require('../models/orderModel');
const mongoose = require('mongoose');

const router = express.Router();

// Route to get all orders for a specific user
router.get('/:userId', protect, async (req, res) => {
  try {
    const { userId } = req.params;
    
    // Check if userId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: 'Invalid userId format' });
    }

    const orders = await Order.find({ userId })
    if (orders.length === 0) {
      return res.status(200).json({ message: 'No orders found for this user', orders: [] });
    }
      

    res.json({ orders });
    // res.status(200).json(orders);// Send orders back to the client
  } catch (err) {
    console.error('Error fetching orders:', err); // Log error
    res.status(500).json({ message: 'Error fetching orders', error: err.message });
  }
});

router.post('/', protect, async (req, res) => {
    const { cart, shippingAddress, paymentStatus, total } = req.body;
    const userId = req.user._id; // Assume the user is authenticated via middleware
  
    if (!cart || !shippingAddress || !paymentStatus || !total) {
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    try {
      // Create a new order document
      const newOrder = new Order({
        userId,
        cart,
        shippingAddress,
        total,
        paymentStatus,
        createdAt: Date.now(),
      });
  
      const savedOrder = await newOrder.save();
      res.status(201).json(savedOrder); // Return the saved order
    } catch (error) {
      console.error('Error creating order:', error);
      res.status(500).json({ message: 'Error creating order', error: error.message });
    }
  });

module.exports = router;
