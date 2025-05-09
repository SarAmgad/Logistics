import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShipmentModule } from './shipment/shipment.module';
import { ShipmentService } from './shipment/shipment.service';
import { PrismaService } from './prisma/prisma.service';
import { StatusService } from './status/status.service';
import { StatusController } from './status/status.controller';
import { StatusModule } from './status/status.module';

@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'logistics.db',
      entities: [],
      synchronize: true,
  }), ShipmentModule, StatusModule],
  controllers: [AppController, StatusController],
  providers: [AppService, ShipmentService, PrismaService, StatusService],
})
export class AppModule {}
