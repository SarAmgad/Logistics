import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { createShipmentDTO } from './DTO/createShipmentDTO';
import { ShipmentService } from './shipment.service';
import { updateShipmentDTO } from './DTO/updateShipmentDTO';

@Controller('shipment')
export class ShipmentController {

    constructor(private readonly shipmentService: ShipmentService){}

    @Get()
    getAllShippments(
        @Query('pageNo', new ParseIntPipe()) pageNo: number = 1, 
        @Query('pageSize', new ParseIntPipe()) pageSize: number = 10,
        @Query('statusId') statusId?: string,
        @Query('description') description?: string
    ){
        const filters = {
            statusId: (statusId && !isNaN(parseInt(statusId)))? parseInt(statusId) : undefined,
            description: description 
        };
        return this.shipmentService.getAll(pageNo, pageSize, filters); 
    }

    @Post()
    @UsePipes(new ValidationPipe({
        whitelist: true, 
        forbidNonWhitelisted: true,
        transform: true}))
    async create(@Body() createShipmentDTO: createShipmentDTO){
        return this.shipmentService.create(createShipmentDTO)
    }

    @Put('/:id')
    update(
        @Param('id') uuid: string,
        @Body() dto: updateShipmentDTO
    ){
        return this.shipmentService.update(uuid, dto)
    }

    @Delete('/:id')
    delete(
        @Param('id') uuid: string
    ){
        return this.shipmentService.delete(uuid);
    }

}
