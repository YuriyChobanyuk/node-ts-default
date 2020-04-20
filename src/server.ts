import 'reflect-metadata';
// import mongoose from 'mongoose';
import { InversifyExpressServer } from 'inversify-express-utils';

import appConfig from './config';

import { getApp } from './app';

import { container } from './common/DI/container';
import './default/default.controller';

const server = new InversifyExpressServer(container);

server.setConfig(getApp);

const app = server.build();


app.listen(appConfig.PORT, () => {
  // tslint:disable-next-line: no-console
  console.log(`App is running at port ${appConfig.PORT}`);
});

// app.on('unhandledRejection', (err) => {
//   console.log('UNHANDLED REJECTION');
//   console.error(err);

//   server.close(() => {
//     process.exit(0);
//   });
// });

// const DB = `mongodb+srv://${appConfig.MONGODB_USERNAME}:${
//   appConfig.MONGODB_PASSWORD
// }@cluster0-jgzf0.mongodb.net/naturous?retryWrites=true&w=majority`;

// mongoose
//   .connect(DB, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log('DB connection successful!'));
