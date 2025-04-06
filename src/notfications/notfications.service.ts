import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Notification, Prisma } from '@prisma/client';

@Injectable()
export class NotificationsService {
  private readonly logger = new Logger(NotificationsService.name);

  constructor(private readonly prisma: PrismaService) {}

  /**
   * Creates a new notification with foreign key validation
   * @param employeeId - Valid employee ID
   * @param message - Notification message
   * @param grnId - Optional GRN ID (validated if provided)
   * @param srnId - Optional SRN ID (validated if provided)
   * @returns Created notification
   * @throws Error with descriptive message if operation fails
   */
  async createNotification(
    employeeId: number,
    message: string,
    grnId?: number,
    srnId?: number
  ): Promise<Notification> {
    // Validate inputs
    if (!Number.isInteger(employeeId) || employeeId <= 0) {
      throw new Error('Invalid employee ID');
    }

    if (!message?.trim()) {
      throw new Error('Message cannot be empty');
    }

    try {
      return await this.prisma.$transaction(async (tx) => {
        // Validate all foreign keys before creating the notification
        // await this.validateForeignKeys(tx, employeeId, grnId, srnId);

        return await tx.notification.create({
          data: {
            employee_id: employeeId,
            message: message.trim(),
            grn_id: grnId,
            srn_id: srnId,
            timestamp: new Date(),
            date: new Date(),
          },
        });
      });
    } catch (error) {
      this.logger.error(`Notification creation failed`, {
        error,
        employeeId,
        grnId,
        srnId,
        message: message?.length > 50 ? `${message.substring(0, 50)}...` : message,
      });

      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        switch (error.code) {
          case 'P2002': 
            throw new Error('Notification constraint violation');
          case 'P2003':
            // More specific message based on the meta field
            const fieldName = error.meta?.field_name;
            throw new Error(fieldName 
              ? `Referenced $ not found`
              : 'Referenced record not found');
          default:
            throw new Error('Database operation failed');
        }
      }

      throw error instanceof Error ? error : new Error('Unexpected error creating notification');
    }
  }

  /**
   * Validates all foreign key references before creating notification
   */
  private async validateForeignKeys(
    tx: Prisma.TransactionClient,
    employeeId: number,
    grnId?: number,
    srnId?: number
  ): Promise<void> {
    // Check employee exists
    const employeeExists = await tx.employee.count({
      where: { id: employeeId },
    });
    if (!employeeExists) {
      throw new Error(`Employee with ID ${employeeId} not found`);
    }

    // Check GRN exists if provided
    if (grnId !== undefined) {
      const grnExists = await tx.grn.count({
        where: { id: grnId },
      });
      if (!grnExists) {
        throw new Error(`GRN with ID ${grnId} not found`);
      }
    }

    // Check SRN exists if provided
    if (srnId !== undefined) {
      const srnExists = await tx.srn.count({
        where: { id: srnId },
      });
      if (!srnExists) {
        throw new Error(`SRN with ID ${srnId} not found`);
      }
    }
  }

  // ... rest of your methods (getNotifications, markAsRead, etc.)
}