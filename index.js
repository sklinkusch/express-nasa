const express = require('express');
const app = express();
const port = 3000;
const { doAPOD, doAsteroids } = require("./request");

app.get('/apod', (req, res) => doAPOD(req, res));
app.get('/asteroids', (req, res) => doAsteroids(req, res));

app.listen(port);