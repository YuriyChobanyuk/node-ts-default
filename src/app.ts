import express from 'express';
import morgan from 'morgan';

// Security
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import hpp from 'hpp';

import appConfig from './config';

const app = express();

// Security http headers
// should be one of the first
app.use(helmet());

if (appConfig.NODE_ENV === 'development') {
  app.use(morgan('short'));
}

// Limit requests from same ip
// Numbers are not for production
app.use('/', (req, res, next) => {
  res.status(200).send('All is good');
});

app.use(
  '/api',
  rateLimit({
    max: 1000,
    windowMs: 3600 * 1000,
    message: 'too many request from this IP',
  }),
);

// write http body data to req.body
app.use(
  express.json({
    limit: '1mb',
  }),
);

// Prevent parameters pollutions
app.use(hpp());

// Data sanitization against noSQL injections
app.use(mongoSanitize());

export default app;
