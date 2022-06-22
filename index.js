'use strict'
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 7000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/', (req, res) => res.send("Hello World"));
app.listen(port, () => console.log(`Node server running at http://localhost:${port}`));
app.use(cors());
require("./Config/config");
var routes = require("./Routes/routes");
routes(app);