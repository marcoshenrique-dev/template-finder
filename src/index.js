import * as dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT || 3333;

const express = require('express');

const app = express();

const route = require('./routes');

app.use(express.json());
app.use(route);

app.listen(port, () => console.log('server started at http://localhost:3000'));
