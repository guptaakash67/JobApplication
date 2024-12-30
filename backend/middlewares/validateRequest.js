const validateEmailRequest = (req, res, next) => {
    const { email } = req.body;
    if (!email || !/^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/.test(email)) {
      return res.status(400).json({ error: "Invalid or missing email address." });
    }
    next();
  };
  
  module.exports = { validateEmailRequest };
  