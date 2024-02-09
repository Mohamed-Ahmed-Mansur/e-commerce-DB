/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, ValidationPipe, UsePipes } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() order: any) {
    return this.ordersService.create(order);
  }

  // orders of all customers
  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  // all orders of one customer
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(+id);
  }

  @Get(':userId/:orderId')
  findOneProducts(@Param('orderId') orderId: string) {
    return this.ordersService.findOneProducts(+orderId);
  }
  
}
