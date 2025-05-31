import type { WSContext } from 'hono/dist/types/helper/websocket';

export class WebSocketManager {
  private sockets: Set<WSContext> = new Set();

  addSocket(socket: any) {
    console.log(socket);
    this.sockets.add(socket);
  }

  removeSocket(socket: WSContext) {
    this.sockets.delete(socket);
  }

  broadcast(message: string) {
    console.log(this.sockets, 'this socket');
    for (const socket of this.sockets) {
      console.log(socket);
      socket.send(message);
    }
  }

  get size(): number {
    return this.sockets.size;
  }

  getSockets(): Set<WSContext> {
    return this.sockets;
  }
}
