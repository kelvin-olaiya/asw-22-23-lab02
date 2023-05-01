const express = require("express");
const socketIO = require("socket.io");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

const server = app.listen(8080, () => {
    console.log("Listening on http://localhost:8080/")
});

const io = socketIO(server);
io.on("connection", (socket) => {
    console.log("A user connected");
    socket.on("disconnect", () => {
        console.log("A user disconnected");
    });
    socket.on("chat message", (message) => {
        io.emit("chat message", message);
    });
});

