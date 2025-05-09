import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { createShipmentDTO } from './DTO/createShipmentDTO';
import { PrismaClient } from 'generated/prisma';
import { ShipmentResponse } from './Interface/shipmentResponse.interface';
import { PrismaService } from 'src/prisma/prisma.service';
import { updateShipmentDTO } from './DTO/updateShipmentDTO';
import { Prisma } from 'generated/prisma';
import { contains } from 'class-validator';

@Injectable()
export class ShipmentService {

    constructor( private prisma: PrismaService){}


    async create(createShipmentDTO: createShipmentDTO): Promise<ShipmentResponse>{

        const shipment = await this.prisma.$transaction(async (prisma) => {
            const lastTrackingId = await prisma.shipment.findFirst({
                orderBy: { trackingId: 'desc' },
                select: { trackingId: true },
            });

            const nextTrackingId = (lastTrackingId?.trackingId ?? 0) + 1;

            const newShipment = await prisma.shipment.create({
                data: {
                    ...createShipmentDTO,
                    trackingId: nextTrackingId,
                },
                  select: {
                    id: true,
                    creationDate: true,
                    modificationDate: true,
                    trackingId: true,
                    phoneNumber: true,
                    description: true,
                    statusId: true,
                    status: {
                        select: {
                            id: true,
                            name: true,
                        },
                    },
                },
            });

            return newShipment;
        });

        return shipment;
    }

    async getAll(
        pageNo: number = 1, 
        pageSize: number = 10,
        filters?: {
            statusId?: number;
            description?: string;
        }
    ): Promise<{ data: ShipmentResponse[], totalCount: number}>{
        const skip = (pageNo - 1) * pageSize;

        const where: any = {};
        if (filters?.statusId !== undefined) where.statusId = filters.statusId;
        if (filters?.description !== undefined) {
            where.description = {
                contains: filters.description,
            }
        };

        const [data, totalCount] = await Promise.all([
            this.prisma.shipment.findMany({
                skip,
                take: pageSize,
                orderBy: {
                    creationDate: 'desc'
                },
                where,
                include: {
                    status: true,
                }
            }),
            this.prisma.shipment.count({where,})
        ]);

        return {data, totalCount};
    }

    async update(uuid: string, dto: updateShipmentDTO): Promise<ShipmentResponse>{
        try{
            const updatedShipment = await this.prisma.shipment.update({
                where: {
                    id: uuid
                },
                data: {
                    statusId:  dto.statusId,
                    modificationDate: new Date(),
                },
                include:{
                    status: true
                }
            })

            return updatedShipment;
        }
        catch (error){
            if(error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
                throw new NotFoundException('No shipment was found for this id');
            }
            throw new InternalServerErrorException(error.error || 'Something went wrong');
        }
    }

    async delete(uuid: string){
        try {
            const result = await this.prisma.shipment.delete({
                where:{
                    id: uuid
                }
            })
            return result
        }
        catch (error){
            if(error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
                throw new NotFoundException('No shipment was found for this id');
            }
            throw new InternalServerErrorException(error.error || 'Something went wrong');
        }
    }

}
