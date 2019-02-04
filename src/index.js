import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';

import router from './routes';
import * as errorHandler from './middlewares/errorHandler';
import * as appConstants from './constants/common';

const app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(cors());
app.use('/', router);

app.use(errorHandler.genericErrorHandler);
app.use(errorHandler.notFoundError);

app.listen(appConstants.PORT, (err) => {
  if (err) {
    console.log(`Error: ${err}`);
  }
  console.log(`Listening to port: ${appConstants.PORT}`);
});
