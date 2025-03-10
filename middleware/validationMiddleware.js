// middleware/validationMiddleware.js
const validateCartItem = (req, res, next) => {
    const { productId, quantity } = req.body;
    
    if (!productId || !quantity || quantity <= 0) {
      return res.status(400).json({ message: 'Invalid cart item data' });
    }
    
    next();
  };
  
  module.exports = { validateCartItem };
  
  const validateUserId = (req, res, next) => {
    const { userId } = req.body || req.params;
    if (!userId || typeof userId !== 'string') {
        return res.status(400).json({ message: 'Invalid userId' });
    }
    next();
};

module.exports = { validateUserId };