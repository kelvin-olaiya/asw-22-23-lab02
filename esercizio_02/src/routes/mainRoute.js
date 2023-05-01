const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController")

router.get("/main", (req, res) => {
    // NO: res.send("Main!");
    mainController.response(req, res);
});

module.exports = router;