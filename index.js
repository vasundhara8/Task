const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./app/routes/index');
app.use('/', routes);

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
