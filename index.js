const express = require('express');
const app = express();
const port = 3000;
const { doAPOD, doAsteroids } = require("./request");
const { showVersion, showHelp } = require("./messaging");
const { dateInInput, checkDateFormat, wrongEndpoint } = require("./errors");
const { basicPrompt } = require("./prompt");

const commandlineArgs = process.argv.slice(2);
if (commandlineArgs.includes("--version")) {
  showVersion();
  process.exit();
}
if (commandlineArgs.includes("--help")) {
  showHelp();
  process.exit();
}
if (commandlineArgs.includes("--term")) {
  basicPrompt();
} else {
  app.use('/apod', (req, res, next) => dateInInput(req, res, next));
  app.use('/apod', (req, res, next) => checkDateFormat(req, res, next));
  app.get('/apod', (req, res) => doAPOD(req, res));
  app.get('/asteroids', (req, res) => doAsteroids(req, res));
  app.all('*', (req, res) => wrongEndpoint(req, res));

  app.listen(port);
}