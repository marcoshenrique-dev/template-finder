const express = require('express');
require('dotenv').config();

const routes = require('./routes');

const port = process.env.PORT || 3333;
const appUrl = process.env.APP_URL || 'localhost';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(port, () => console.log(`server started at http://${appUrl}:${port}`));
