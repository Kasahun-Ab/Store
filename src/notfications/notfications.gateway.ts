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

  
  async sendNotificationToEmployee(employeeId: number, message: string, grnId: number) {
    // Input validation
    if (!Number.isInteger(employeeId) || employeeId <= 0) {
      console.error(`Invalid employeeId: ${employeeId}`);
      return false;
    }
  
    if (typeof message !== 'string' || message.trim() === '') {
      console.error('Notification message cannot be empty');
      return false;
    }
  
    if (!Number.isInteger(grnId) || grnId <= 0) {
      console.error(`Invalid GRN ID: ${grnId}`);
      return false;
    }
  
    try {
      const socketId = this.employeeSockets.get(employeeId);
      
      if (!socketId) {
        console.warn(`Employee ${employeeId} is not currently connected. Active connections:`, this.employeeSockets.size);
        return false;
      }
  
      console.log(`Sending notification to employee ${employeeId} via socket ${socketId}`);
      
      // Create a structured notification payload
      const notificationPayload = {
        type: 'grn_notification',
        message: message,
        grnId: grnId,
        timestamp: new Date().toISOString(),
        employeeId: employeeId // Include for verification on client side
      };
  
      // Send the notification
      this.server.to(socketId).emit('notification', notificationPayload);
      
      console.log(`Notification sent successfully to employee ${employeeId}`);
      return true;
      
    } catch (error) {
      console.error(`Failed to send notification to employee ${employeeId}:`, error);
      return false;
    }
  }


  async broadcastNotification(message: string) {
    this.server.emit('notification', message); // Send to all connected sockets
  }

  handleNotification(socket: Socket, data: { employeeId: number; message: string,grnid:number }) {
    this.sendNotificationToEmployee(data.employeeId, data.message,data.grnid);
  }

  private extractEmployeeId(client: Socket): number | null {
 
    return 7;
  }
}
