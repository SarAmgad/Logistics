import { Module } from '@nestjs/common';
import { ShipmentController } from './shipment.controller';
import { ShipmentService } from './shipment.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ShipmentController],
  providers: [ShipmentService, PrismaService]
})
export class ShipmentModule {}
