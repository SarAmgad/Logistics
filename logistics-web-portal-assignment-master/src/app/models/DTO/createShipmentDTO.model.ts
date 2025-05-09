import { ShipmentStatus } from "../enum/status.enum";

export class createShipmentDTO{
    description!: string;
    phoneNumber!: string;
    statusId: number = ShipmentStatus.Ready;

}