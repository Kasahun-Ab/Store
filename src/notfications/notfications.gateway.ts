import { WebSocketGateway, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { EmployeeService } from '../employee/employee.service';
import { NotificationsService } from './notfications.service';

@WebSocketGateway()
export class NotificationsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  private employeeSockets = new Map<number, string>(); // Map employeeId to socketId

  constructor(
    private readonly notificationsService: NotificationsService,
    private readonly employeeService: EmployeeService,
  ) {}

  handleConnection(client: Socket) {
    const employeeId = this.extractEmployeeId(client); // Assume you extract employee ID from token/session
    if (employeeId) {
      this.employeeSockets.set(employeeId, client.id);
    }
  }

  handleDisconnect(client: Socket) {
    [...this.employeeSockets.entries()].forEach(([employeeId, socketId]) => {
      if (socketId === client.id) {
        this.employeeSockets.delete(employeeId);
      }
    });
  }

  async sendNotificationToEmployee(employeeId: number, message: string) {
    const socketId = this.employeeSockets.get(employeeId);
    if (socketId) {
      this.server.to(socketId).emit('notification', message);
    } else {
      console.log(`Employee ${employeeId} is not connected.`);
    }
  }

  async broadcastNotification(message: string) {
    this.server.emit('notification', message); // Send to all connected sockets
  }

  handleNotification(socket: Socket, data: { employeeId: number; message: string }) {
    this.sendNotificationToEmployee(data.employeeId, data.message);
  }

  private extractEmployeeId(client: Socket): number | null {
    // Implement logic to extract employeeId from JWT or session data
    return null;
  }
}
