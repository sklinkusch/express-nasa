const express = require('express');
const app = express();
const port = 3000;
const { doRequest } = require("./request");

app.get('/apod', (req, res) => doRequest(req, res));

app.listen(port);