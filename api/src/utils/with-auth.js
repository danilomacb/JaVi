const jwt = require("jsonwebtoken");

const withAuth = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    res.status(401).json("Não autorizado: token vazio");
  } else {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        console.error(err);
        res.status(401).json("Não autorizado: token inválido");
      } else {
        req.email = decoded.email;
        next();
      }
    });
  }
};

module.exports = withAuth;
