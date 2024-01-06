import { Server, Socket } from "socket.io";

const SocketHandler = (req, res) => {
  if (res.socket.server.io) {
    console.log("already connected");
  } else {
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on("connection", (socket) => {
      console.log("connected Socket");
      socket.on("message", (message) => {
        console.log(message);
      });
    });
  }
  res.end();
};

export default SocketHandler;
