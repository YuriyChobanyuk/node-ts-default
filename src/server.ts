import mongoose from 'mongoose';

import appConfig from './config';

import app from './app';

const server = app.listen(appConfig.PORT, () => {
  // tslint:disable-next-line: no-console
  console.log(`App is running at port ${appConfig.PORT}`);
});

app.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION');
  console.error(err);

  server.close(() => {
    process.exit(0);
  });
});

const DB = `mongodb+srv://${appConfig.MONGODB_USERNAME}:${
  appConfig.MONGODB_PASSWORD
}@cluster0-jgzf0.mongodb.net/naturous?retryWrites=true&w=majority`;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful!'));