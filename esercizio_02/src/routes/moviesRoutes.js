const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/moviesController")

router.route("/")
    .get(moviesController.readAllMovies)
    .post(moviesController.createMovie);

router.route("/:id")
    .get(moviesController.readMovie)
    .put(moviesController.editMovie)
    .delete(moviesController.deleteMovie);

module.exports = router;
