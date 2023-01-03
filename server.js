const http = require("http");
const socket = require("socket.io");
const express = require("express");
var cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = socket(server);
app.use(cors());

const SERVER_HOST = "localhost";
const SERVER_PORT = 8091;

io.on("connection", (socket) => {
  console.log("[IO] Connection => Server has a new connection");
  socket.on("movimentUpArrowUpP1", async (a) => {
    socket.emit("returnMovimentUpArrowUpP1", "voltou");
    io.emit("returnMovimentUpArrowUpP1", "voltou");
  });

  socket.on("movimentDownArrowUpP1", async (a) => {
    console.log(a);
    socket.emit("returnMovimentDownArrowUpP1", "voltou");
    io.emit("returnMovimentDownArrowUpP1", "voltou");
  });

  socket.on("movimentUpArrowDownP1", async (a) => {
    console.log(a);
    socket.emit("returnMovimentUpArrowDownP1", "voltou");
    io.emit("returnMovimentUpArrowDownP1", "voltou");
  });

  socket.on("movimentDownArrowDownP1", async (a) => {
    console.log(a);
    socket.emit("returnMovimentDownArrowDownP1", "voltou");
    io.emit("returnMovimentDownArrowDownP1", "voltou");
  });

  socket.on("disconnect", async () => {
    console.log("[SOCKET] Disconnect => A connection was disconnected");
  });
});

server.listen(SERVER_PORT, SERVER_HOST, () => {
  console.log(
    `[HTTP] Listen => Server is running at http://${SERVER_HOST}:${SERVER_PORT}`
  );
  console.log("[HTTP] Listen => Press CTRL+C to stop it");
});
