const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    thumbnail: { type: String, required: true },
    description: { type: String },
    category: { type: String },
    price: { type: Number, required: true },
    discountPercentage: { type: Number, min: 0, max: 100 },
    rating: { type: Number, default: 0 },
    stock: { type: Number, required: true, min: [0, 'Stock cannot be negative'] },
    tags: [String],
    brand: { type: String },
    sku: { type: String, unique: true },
    weight: { type: Number },
    dimensions: {
        width: { type: Number, min: 0 },
        height: { type: Number, min: 0 },
        depth: { type: Number, min: 0 }
    },
    warrantyInformation: { type: String },
    shippingInformation: { type: String },
    availabilityStatus: { type: String, enum: ['In Stock', 'Out of Stock', 'Pre-order'], default: 'In Stock' },
    reviews: [
        {
            rating: { type: Number, min: 1, max: 5 },
            comment: { type: String },
            date: { type: Date, default: Date.now },
            reviewerName: { type: String },
            reviewerEmail: { type: String }
        }
    ]
}, { timestamps: true });

// Indexes for frequently searched fields
productSchema.index({ category: 1, tags: 1, brand: 1 });

// Export the model
module.exports = mongoose.model('Product', productSchema);
