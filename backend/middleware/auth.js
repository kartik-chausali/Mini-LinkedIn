// authMiddleware.js
const jwt = require('jsonwebtoken');

const SECRET_KEY = "secret"

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];

  // Format: Authorization: Bearer <token>
  const token = authHeader && authHeader.split(' ')[0];

  if (!token) {
    return res.status(401).json({ message: 'Access token missing' });
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid or expired token' });
    }
    console.log("decoded ", user)
    req.user = user; // attach decoded user data to request
    next(); // continue to next handler
  });
}

module.exports = authenticateToken;