import express from 'express';
import morgan from 'morgan';

import appConfig from './config';

const app = express();

if (appConfig.environment === 'development') {
  app.use(morgan('short'));
}

app.use('/', (req, res, next) => {
  res.status(200).send('All is good');
});

export default app;
