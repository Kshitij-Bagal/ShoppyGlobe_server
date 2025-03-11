require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

// Import Routes
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const orderRoutes = require('./routes/orderRoutes');  // Add Order Routes
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: ['http://localhost:5173','https://kshitij-bagal.github.io','https://kshitij-bagal.github.io/ShoppyGlobe/'],  // Update with your frontend URL
    credentials: true,
}));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/users', userRoutes);       // User routes (register, login, profile)
app.use('/api/products', productRoutes); // Product routes (list, details)
app.use('/api/cart', cartRoutes);        // Cart routes (add, remove, view)
app.use('/api/orders', orderRoutes);     // Orders route (create order)

// Deployment setup (for production)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/dist')));
    
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
    });
}

// Error handling
app.use(notFound);
app.use(errorHandler);

// Server Startup
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
