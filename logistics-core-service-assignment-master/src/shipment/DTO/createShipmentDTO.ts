import { IsString, IsInt, IsNotEmpty, isNotEmpty, isInt, Matches } from 'class-validator';

export class createShipmentDTO{
    @IsString()
    @IsNotEmpty()
    description: string;

    @IsInt()
    statusId: number = 1;

    @IsString()
    @IsNotEmpty()
    @Matches(/^\+?\d{10,15}$/, {
        message: 'Phone number must be valid and contain 10 to 15 digits (optionally starting with +)',
      }) 
    phoneNumber: string;

}