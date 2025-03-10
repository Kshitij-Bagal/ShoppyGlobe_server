// cartController.js
const Cart = require('../models/cartModel');

// Add item to the cart
const addToCart = async (req, res) => {
    try {
        console.log('Request body:', req.body); // Log the incoming request data

        const { productId, title, price, quantity, total, thumbnail } = req.body;  // Destructure thumbnail
        const userId = req.user._id;

        // Check if the cart already exists
        let cart = await Cart.findOne({ userId });

        // If no cart exists, create a new one
        if (!cart) {
            cart = new Cart({
                userId,
                products: [{ productId, title, price, quantity, total, thumbnail }]  // Include thumbnail here
            });
        } else {
            // If cart exists, check if the product is already in the cart
            const existingProductIndex = cart.products.findIndex((product) => product.productId.toString() === productId);
            if (existingProductIndex !== -1) {
                // If the product exists, update the quantity
                cart.products[existingProductIndex].quantity += quantity;
            } else {
                // If the product is not in the cart, add it
                cart.products.push({ productId, title, price, quantity, total, thumbnail });  // Add thumbnail here too
            }
        }

        // Save the cart and return it
        await cart.save();
        res.status(201).json(cart);  // Return the updated cart
    } catch (err) {
        console.error('Add to cart error:', err.message); // Log detailed error
        res.status(500).json({ message: 'Error adding item to cart', error: err.message });
    }
};

// Get the user's cart
const getCart = async (req, res) => {
    try {
        const userId = req.user._id;  // Get the user from the decoded token
        let cart = await Cart.find({ userId });

        if (!cart || cart.length === 0) {
            // If no cart exists, create a new one
            cart = new Cart({ userId, products: [] });
            await cart.save();
        }

        res.status(200).json({ items: cart[0].products });  // Return the products of the cart
    } catch (err) {
        res.status(500).json({ message: 'Error fetching cart', error: err.message });
    }
};

// Update cart (example: update product quantity)
const updateCart = async (req, res) => {
    const { productId, quantity } = req.body;
    try {
        const userId = req.user._id;
        const cart = await Cart.findOne({ userId });

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        const productIndex = cart.products.findIndex(product => product.productId.toString() === productId);
        if (productIndex !== -1) {
            // Update product quantity
            cart.products[productIndex].quantity = quantity;

            // Save the cart again after the update
            await cart.save();

            res.status(200).json(cart);
        } else {
            res.status(404).json({ message: 'Product not found in cart' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error updating cart', error: err.message });
    }
};
// Remove product from cart
const removeFromCart = async (req, res) => {
    try {
        const { productId } = req.body;
        const userId = req.user._id;

        const cart = await Cart.findOne({ userId });
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        cart.products = cart.products.filter(product => product.productId.toString() !== productId);
        await cart.save();

        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json({ message: 'Error removing item from cart', error: err.message });
    }
};

module.exports = { addToCart, getCart, updateCart, removeFromCart };
