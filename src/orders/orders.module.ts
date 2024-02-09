/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
// orders.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { orderSchema } from './orders.schema';
import { ProductsModule } from '../products/products.module'; 
import { productSchema } from 'src/products/products.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'orders', schema: orderSchema }]),
    MongooseModule.forFeature([{ name: 'products', schema: productSchema }]),
    ProductsModule
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}

