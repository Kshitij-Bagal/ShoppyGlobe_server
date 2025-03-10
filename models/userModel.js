const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // 🔑 Import bcrypt

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number },
    gender: { type: String },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    birthDate: { type: Date },
    address: {
        street: { type: String },
        city: { type: String },
        state: { type: String },
        postalCode: { type: String },
        country: { type: String }
    },
    role: { type: String, enum: ['user', 'admin'], default: 'user' }

}, { timestamps: true });

// 🔐 Hash password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    try {
        this.password = await bcrypt.hash(this.password, 10);
        next(); // ✅ Call next after hashing
    } catch (err) {
        next(err); // ❗ Pass errors to the next middleware
    }
});

module.exports = mongoose.model('User', userSchema);
