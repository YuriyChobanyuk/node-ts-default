import app from './app';
import appConfig from './config';

app.listen(appConfig.port, () => {
  // tslint:disable-next-line: no-console
  console.log(`App is running at port ${appConfig.port}`);
});
