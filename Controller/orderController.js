const Order = require('../models/orderModel');
const Cart = require('../models/cartModel');

const createOrder = async (req, res) => {
    try {
        const userId = req.user._id;  // Get user ID from auth middleware
        const cart = await Cart.findOne({ userId });

        if (!cart || cart.products.length === 0) {
            return res.status(400).json({ message: 'Cart is empty' });
        }
        
        // Create an order with cart data
        const newOrder = new Order({
            userId,
            products: cart.products,
            total: cart.total,
            discountedTotal: cart.discountedTotal,
            totalProducts: cart.totalProducts,
            totalQuantity: cart.totalQuantity,
            paymentStatus : req.body.paymentStatus || 'Pending', // or 'Completed' if the payment was successful
            shippingAddress: req.body.shippingAddress, // Pass shipping address from the client
        });

        // Save the order to the database
        await newOrder.save();

        // Clear the cart after successful payment
        await Cart.findOneAndDelete({ userId });

        res.status(201).json(newOrder);  // Respond with the newly created order
    } catch (err) {
        res.status(500).json({ message: 'Error creating order', error: err.message });
    }
};

module.exports = { createOrder };
