import { useSocket } from "@/context/SocketContext";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const socket = useSocket();
  socket?.on("connect", () => {
    console.log(socket.id);
  });
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    ></main>
  );
}
