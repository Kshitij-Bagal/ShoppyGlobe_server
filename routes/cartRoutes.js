const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { addToCart, getCart, updateCart, removeFromCart, clearCart} = require('../Controller/cartController');

const router = express.Router();

// 🛒 Route to get the user's cart (protected)
router.get('/', protect, getCart);          // Fetch the user's cart (only if logged in)

// 🛒 Route to add a product to the cart (protected)
router.post('/', protect, addToCart);       // Add product to cart (only if logged in)

// 🛒 Route to update the cart (protected)
router.put('/', protect, updateCart);       // Update cart (e.g., change product quantity, only if logged in)

// 🛒 Route to remove a product from the cart (protected)
router.delete('/', protect, removeFromCart); // Remove product from cart (only if logged in)

// 🛒 Route to clear the user's cart (protected)
router.delete('/clear', protect, clearCart); 

module.exports = router;
