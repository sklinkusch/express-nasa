const express = require('express');
const app = express();
const port = 3000;

const api_key = "ToMkX8ppOaHwLbx4nhHegwzkGi6HUo3BhhMAV8A1";

app.get('/', (req, res) => res.send('It works'));

app.listen(port);