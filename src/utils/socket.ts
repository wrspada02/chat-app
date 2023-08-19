import { Socket, io } from "socket.io-client";

export class SocketIO {
  socket: Socket;
  constructor () {
    this.socket = io();
  }
}