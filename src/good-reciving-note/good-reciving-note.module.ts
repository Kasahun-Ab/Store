// src/grn/grn.module.ts
import { forwardRef, Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { GrnController } from './good-reciving-note.controller';
import { GrnService } from './good-reciving-note.service';
import { NotificationsService } from 'src/notfications/notfications.service';
import { NotificationsGateway } from 'src/notfications/notfications.gateway';
import { EmployeeModule } from 'src/employee/employee.module';
import { NotficationsModule } from 'src/notfications/notfications.module';

@Module({
  controllers: [GrnController],
    
  providers: [GrnService, PrismaService,NotificationsGateway],
  imports:[
    EmployeeModule,
    // forwardRef(() => NotficationsModule), 
    NotficationsModule
  ],
 
 

})
export class GrnModule {}