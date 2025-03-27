import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service'; // Adjust the import if necessary
import { Notification } from '@prisma/client'; // Import Notification type from Prisma client

@Injectable()
export class NotificationsService {
  constructor(private prisma: PrismaService,) {}

  // Create a new notification for an employee
  async createNotification(employeeId: number, message: string, grnId?: number, srnId?: number): Promise<Notification> {
    // Check if the employee exists
    const employee = await this.prisma.employee.findUnique({ where: { id: employeeId } });

    if (!employee) {
      throw new Error('Employee not found');
    }

    // Create a new notification for the employee
    const notification = await this.prisma.notification.create({
      data: {
        employee_id: employee.id,  // Match Prisma model field
        message,
        grn_id: grnId,  // Optionally link to Grn if provided
        srn_id: srnId,  // Optionally link to Srn if provided
        timestamp: new Date(), // Default timestamp (or use Prisma default)
        date: new Date(), // Assuming current date is used for 'date' field
      },
    });

    // Here you can also add logic for sending the notification to the employee (via WebSocket or other means)

    return notification;
  }

  // Retrieve all notifications for an employee
  async getNotifications(employeeId: number): Promise<Notification[]> {
    const employee = await this.prisma.employee.findUnique({ where: { id: employeeId } });

    if (!employee) {
      throw new Error('Employee not found');
    }

    // Retrieve notifications for the employee
    return this.prisma.notification.findMany({
      where: { employee_id: employee.id }, // Match Prisma model field
    });
  }

  // Mark a notification as read
  async markAsRead(notificationId: number): Promise<void> {
    const notification = await this.prisma.notification.findUnique({
      where: { id: notificationId },
    });

    if (!notification) {
      throw new Error('Notification not found');
    }

    await this.prisma.notification.update({
      where: { id: notificationId },
      data: { read: true }, // Assuming you have a 'read' field on your notification model
    });
  }
}
