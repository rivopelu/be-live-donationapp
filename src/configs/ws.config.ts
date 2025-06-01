import type { Hono } from 'hono';
import type { UpgradeWebSocket } from 'hono/dist/types/helper/websocket';
import { WebSocketManager } from '../utils/WebSocketManager';
export const wsManager = new WebSocketManager();

export function setupWs(app: Hono, upgradeWebSocket: UpgradeWebSocket) {
  app.get(
    '/ws/:id',
    upgradeWebSocket((c) => {
      return {
        onOpen(_, server) {
          const topic = c.req.param('id');

          wsManager.addSocket({
            ws: server,
            topic: topic,
          });
        },
        onMessage(event, ws) {
          console.log(`Message from client: ${event.data}`);
          ws.send('Hello from server!');
        },
        onClose: () => {
          console.log('Connection closed');
        },
      };
    }),
  );
}
