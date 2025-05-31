import type { Hono } from 'hono';
import type { UpgradeWebSocket } from 'hono/dist/types/helper/websocket';
import { WebSocketManager } from '../utils/WebSocketManager';
export const wsManager = new WebSocketManager();

export function setupWs(app: Hono, upgradeWebSocket: UpgradeWebSocket) {
  app.get(
    '/ws',
    upgradeWebSocket((c) => {
      return {
        onOpen(_, server) {
          wsManager.addSocket(server);
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
