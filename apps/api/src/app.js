const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

console.log("Hello i am APi SERVER");

// Middleware
app.use(cors());
app.use(bodyParser.json());




