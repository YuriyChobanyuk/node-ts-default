import { config } from 'dotenv';
config();

const appConfig = {
  MONGODB_PASSWORD: process.env.MONGODB_PASSWORD || '',
  MONGODB_USERNAME: process.env.MONGODB_USERNAME || 'defaultUser',
  PORT: process.env.PORT || 4000,
  JWT_SECRET: process.env.JWT_SECRET || 'default_secret_key',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '1h',
  JWT_EXPIRES_IN_COOKIE: process.env.JWT_EXPIRES_IN_COOKIE || 3600000,
  EMAIL_NAME: process.env.EMAIL_NAME,
  EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
  EMAIL_HOST: process.env.EMAIL_HOST,
  EMAIL_PORT: process.env.EMAIL_PORT,
  NODE_ENV: process.env.NODE_ENV,
};

export default appConfig;


