import { config } from 'dotenv';
config();

const appConfig = {
  port: process.env.PORT || 3000,
  environment: process.env.NODE_ENV,
};

export default appConfig;


