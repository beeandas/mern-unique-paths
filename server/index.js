const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = new express();
app.use(cors());
app.use(bodyParser.json());


mongoose.connect()

