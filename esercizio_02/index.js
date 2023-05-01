const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const mainRouter = require('./src/routes/mainRoute');
const moviesRouter = require('./src/routes/moviesRoutes');
/*
 * MIDDLEWARE
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
/*
 * ROUTES
 */
app.use(mainRouter);
app.use(`/movies`, moviesRouter);
/*
 * SERVER
 */
app.listen(8080, () => {
    console.log("http://localhost:8080/");
});
