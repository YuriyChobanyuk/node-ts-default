import app from './app';
import appConfig from './config';

app.listen(appConfig.port, () => {
  console.log(`App is running at port ${appConfig.port}`);
});
