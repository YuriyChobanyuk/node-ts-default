import { config } from 'dotenv';
config();

const appConfig = {
  port: process.env.PORT || 3000,
};

export default appConfig;


