/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MONGO_URI: process.env.MONGO_URI,
    TOKEN_SECRET: process.env.TOKEN_SECRET,
    DOMAIN: process.env.DOMAIN,
    MAIL_FROM_ADDRESS: process.env.MAIL_FROM_ADDRESS,
    MAIL_HOST: process.env.MAIL_HOST,
    MAIL_USERNAME: process.env.MAIL_USERNAME,
    MAIL_PASSWORD: process.env.MAIL_PASSWORD,
  },
};

module.exports = nextConfig;
