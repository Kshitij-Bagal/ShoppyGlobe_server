const express = require('express');
const Product = require('../models/productModel');
const router = express.Router();

// 🛍️ Get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch products', error: err.message });
    }
});

// 🟩 Get a single product
// 🟩 Get a single product by ID
router.get('/:ProductId', async (req, res) => { 
    try {
        const { ProductId } = req.params;
        const product = await Product.findById(ProductId);  // Use findById for fetching by ID
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching product', error: err.message });
    }
});


// 🟨 Add a new product
router.post('/', async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (err) {
        res.status(500).json({ message: 'Failed to create product', error: err.message });
    }
});

// 🟩 Update a product 
router.put('/:ProductId', async (req, res) => { 
    try {
        const {ProductId} = req.params;
        const updatedProduct = await Product.findOneAndUpdate({ _id: ProductId }, req.body, { new: true });
        if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(500).json({ message: 'Failed to update product', error: err.message });
    }
});

// ❌ Delete a product 
router.delete('/:ProductId', async (req, res) => { 
    try {
        const { ProductId } = req.params;
        const deletedProduct = await Product.findOneAndDelete({ _id: ProductId});
        if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Failed to delete product', error: err.message });
    }
});

module.exports = router;
