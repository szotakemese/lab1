const express = require('express');
const task7 = require('./task.js');

const task7Router = express.Router();

task7Router.get('/', task7.seventhOfTask1);

module.exports = task7Router;