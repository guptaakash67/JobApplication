const express = require("express");
const { sendVerificationEmail } = require("../controllers/emailController");
const { validateEmailRequest } = require("../middlewares/validateRequest");

const router = express.Router();

router.post("/send-verification-email", validateEmailRequest, sendVerificationEmail);

module.exports = router;
