export interface Shipment {
    id: string;
    description: string;
    creationDate: Date;
    modificationDate?: Date; 
    phoneNumber: string;
    trackingId?: number;
    statusId: number;
    status: Status;
}

export interface Status {
    id: number; 
    name: string;
    shipments: Shipment[];
}
