const jwt = require("jsonwebtoken");

function getEmail(req, res) {
  const token = req.cookies.token;
  let email;

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    email = decoded.email;
  });

  return email;
}

module.exports = getEmail;
