import { Controller, Get } from '@nestjs/common';
import { StatusService } from './status.service';

@Controller('status')
export class StatusController {

    constructor( private statusService: StatusService){}

    @Get()
    getAllStatus(){
        return this.statusService.getStatus();
    }
}
