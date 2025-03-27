import { Module } from '@nestjs/common';
import { NotificationsService } from './notfications.service';



import { EmployeeModule } from 'src/employee/employee.module';

import { PrismaService } from 'prisma/prisma.service';
import { NotificationsGateway } from './notfications.gateway';

@Module({
  providers: [
  
    NotificationsService,
    NotificationsGateway, 
    PrismaService,
  ],
  exports: [NotificationsService, NotificationsGateway], 
  imports:[ EmployeeModule,],
 
})
export class NotficationsModule {}
