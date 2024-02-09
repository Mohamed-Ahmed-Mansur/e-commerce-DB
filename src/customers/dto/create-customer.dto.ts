/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class CreateCustomerDto {
    @IsNotEmpty()
    @IsNumber()
    userID: number;

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    name: string;

    @IsNotEmpty()
    @IsNumber()
    age: number;
    
    @IsNotEmpty()
    @IsString()
    email: string;
}
