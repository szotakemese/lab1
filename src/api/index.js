const express = require("express");

const aboutRouter = require("./about");
const randomRouter = require("./random");
const task1Router = require("./task1");
const task7Router = require("./task7");

const apiRouter = express.Router();
apiRouter.use('/about', aboutRouter);
apiRouter.use('/random', randomRouter);
apiRouter.use('/task1', task1Router);
apiRouter.use('/task7', task7Router);

module.exports = apiRouter;