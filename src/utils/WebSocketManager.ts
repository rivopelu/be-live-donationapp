import type { WSContext } from 'hono/dist/types/helper/websocket';

type WsWithTopic = {
  ws: WSContext;
  topic: string;
};
export class WebSocketManager {
  private sockets: Set<WsWithTopic> = new Set();

  addSocket(socket: WsWithTopic) {
    console.log(socket);
    this.sockets.add({
      topic: socket.topic,
      ws: socket.ws,
    });
  }

  removeSocket(socket: WsWithTopic) {
    this.sockets.delete(socket);
  }

  broadcastToTopic(message: string, topic: string) {
    for (const client of this.sockets) {
      if (client.topic === topic) {
        client.ws.send(message);
      }
    }
  }

  get size(): number {
    return this.sockets.size;
  }

  getSockets(): Set<WsWithTopic> {
    return this.sockets;
  }
}
