const express = require('express');
const app = express();
const port = 3000;
const { doAPOD, doAsteroids } = require("./request");
const { showVersion, showHelp } = require("./messaging");

const commandlineArgs = process.argv.slice(2);
if (commandlineArgs.includes("--version")) {
  showVersion();
  process.exit();
}
if (commandlineArgs.includes("--help")) {
  showHelp();
  process.exit();
}

app.get('/apod', (req, res) => doAPOD(req, res));
app.get('/asteroids', (req, res) => doAsteroids(req, res));

app.listen(port);