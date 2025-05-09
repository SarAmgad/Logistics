import { status } from "src/status/DTO/status.interface";

export interface ShipmentResponse {
    id: string;
    creationDate: Date;
    modificationDate: Date | null;
    trackingId: number;
    phoneNumber: string;
    description: string;
    statusId: number;
    status?: status
}