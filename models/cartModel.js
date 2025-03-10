const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    products: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
            title: { type: String, required: true },
            price: { type: Number, required: true },
            quantity: { type: Number, required: true, min: 1 },
            total: { type: Number, required: true },
            discountPercentage: { type: Number, min: 0, max: 100 },
            discountedTotal: { type: Number },
            thumbnail: { type: String }
        }
    ],
    total: { type: Number, default: 0 },
    discountedTotal: { type: Number, default: 0 },
    totalProducts: { type: Number, default: 0 },
    totalQuantity: { type: Number, default: 0 }
}, { timestamps: true });

// Virtual field to calculate the total price of all products in the cart
cartSchema.virtual('cartTotal').get(function() {
    return this.products.reduce((acc, product) => {
        // Use discountedTotal if it exists, otherwise use the original total
        return acc + (product.discountedTotal || product.total);
    }, 0);
});

// Middleware to update total fields before saving
cartSchema.pre('save', function(next) {
    // Calculate individual product totals and discounts
    this.products.forEach(product => {
        if (product.discountPercentage) {
            // Calculate discounted total if there's a discount
            product.discountedTotal = (product.price * product.quantity) * ((100 - product.discountPercentage) / 100);
        } else {
            // If no discount, calculate the total price
            product.discountedTotal = product.price * product.quantity;
        }
        // Ensure the total for the product is correct (with or without discount)
        product.total = product.price * product.quantity;
    });

    // Update total, totalProducts, and totalQuantity
    this.total = this.cartTotal; // Total cart price based on all products
    this.totalProducts = this.products.length; // Count of distinct products
    this.totalQuantity = this.products.reduce((acc, product) => acc + product.quantity, 0); // Total quantity of products

    next();
});

module.exports = mongoose.model('Cart', cartSchema);
