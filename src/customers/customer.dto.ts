/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class CustomerDto {
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
