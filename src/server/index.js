import express from 'express';
const path = require('path');
import { routeHandler } from './route-handler';

const index = express();
index
  .disable('x-powered-by')
  .use(express.static(path.join(__dirname, "dist")))
  .get('/overview', routeHandler);

export default index;
