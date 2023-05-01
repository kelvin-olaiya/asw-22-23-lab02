const movies = require("./movies.json");
const fs = require("fs");

function success() {
    return { success: true };
}

function movieFromBody(body, id = -1) {
    return {
        id: id,
        homepage: body.homepage,
        overview: body.overview,
        poster_path: body.poster_path,
        release_date: body.release_date,
        title: body.title
    }
}

function getMovieIndex(id) {
    return movies.findIndex(m => m.id === parseInt(id));
}

function movieExists(id) {
    return getMovieIndex(id) > -1;
}

const readAllMovies = (req, res) => {
    res.json(movies);
}

const createMovie = (req, res) => {
    if (movieExists(req.body.id)) {
        res.status(400).send("<h1>A movie with specified id already exists</h1>");
    } else {
        movies.push(req.body);
        res.status(201).send();
    }
}

const readMovie = (req, res) => {
    const movieIndex = getMovieIndex(req.params.id);
    if (movieExists(movieIndex)) {
        res.json(movies[movieIndex]);
    } else {
        res.status(404).json({ description: "Movie not found" });
    }
}

const editMovie = (req, res) => {
    if (movieExists(req.params.id)) {
        movies.splice(getMovieIndex(req.params.id), 1, movieFromBody(req.body));
        res.status(201).json({ description: "Movie updated" });
    } else {
        res.status(404).json({ description: "Movie not found" });
    }

}

const deleteMovie = (req, res) => {
    if (movieExists(req.params.id)) {
        movies.splice(getMovieIndex(req.params.id), 1);
        res.status(201).json({ description: "Movie deleted" });
    } else {
        res.status(404).json({ description: "Movie not found" });
    }
}

exports.readAllMovies = readAllMovies
exports.createMovie = createMovie
exports.readMovie = readMovie
exports.editMovie = editMovie
exports.deleteMovie = deleteMovie
