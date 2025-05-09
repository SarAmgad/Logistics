import { Injectable } from '@nestjs/common';
import { stat } from 'fs';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StatusService {
    constructor(private prisma: PrismaService){}

    getStatus(){
        const status = this.prisma.status.findMany({});
        return status;
    }
}
