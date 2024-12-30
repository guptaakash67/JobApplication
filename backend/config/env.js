const dotenv = require("dotenv");
console.log("Environment Variables:", process.env);


const loadEnvVariables = () => {
  dotenv.config();
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error("Missing required environment variables: EMAIL_USER, EMAIL_PASS");
  }
};

module.exports = { loadEnvVariables };
