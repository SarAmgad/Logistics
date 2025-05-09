import { IsInt, IsPositive } from "class-validator";

export class updateShipmentDTO {

    @IsInt()
    @IsPositive()
    statusId: number;
}