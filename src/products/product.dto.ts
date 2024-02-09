/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsString, MinLength, Min } from "class-validator";

export class ProductDto {
    @IsNotEmpty()
    @IsNumber()
    productID: number;

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    name: string;

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    price: number;
    
    @IsNotEmpty()
    @IsString()
    description: string;
}
