import { io } from "socket.io-client";
import { createContext, useEffect, useState, useContext } from "react";

const SocketContext = createContext();

export default function SocketProvider({ children }) {
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    const connection = io();
    console.log(connection);
    setSocket(connection);
  }, []);
  socket?.on("connect_error", async (err) => {
    console.log("Error in socket connection", err);
    await fetch("/api/socket");
    ``;
  });

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}

export function useSocket() {
  return useContext(SocketContext);
}
