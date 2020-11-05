const express = require("express");

const port = process.env.PORT || 4001;
const index = require("./routes/index");

const app = express();
app.use(index);

const server = app.listen(port, () => {
  console.log("Listening on port: " + port);
});
const io = require("socket.io")(server);

let expressions = new Array();

io.on("connect", (socket) => {
  // If new user arrives
  socket.emit("new user", expressions);

  socket.on("message", (data) => {
    // Receieve new equation
    // Append to existing equations list
    if (expressions.length === 10) {
      expressions.shift();
    }
    expressions.push(data);
    // Broadcast to all sockets except where message arrived from
    socket.broadcast.emit("new message", {
      user: data.user,
      equation: data.equation,
    });
  });
});
