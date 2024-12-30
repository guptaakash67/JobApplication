const nodemailer = require("nodemailer");

const sendVerificationEmail = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: "Email is required." });
  }

  try {
    const transporter = require("../utils/emailTransporter");
    const verificationLink = `http://localhost:3000/verify-email?email=${encodeURIComponent(email)}`;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Verify Your Email",
      html: `<p>Click <a href="${verificationLink}">here</a> to verify your email.</p>`,
    });

    res.status(200).json({ message: "Verification email sent!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send email." });
  }
};

module.exports = { sendVerificationEmail };
