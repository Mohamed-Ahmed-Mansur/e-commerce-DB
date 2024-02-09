/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, Res } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerReg } from './dto/customer-reg';
import { CustomerLog } from './dto/customer-log';
import { Response } from 'express';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @UsePipes(ValidationPipe)
  @Post('reg')
  Reg(@Body() customerReg:CustomerReg) {
    return this.customerService.Reg(customerReg);
  }
  
  @UsePipes(ValidationPipe)
  @Post('log')
  Login(@Body() customerLog:CustomerLog, @Res({passthrough:true}) res:Response) {
    return this.customerService.Log(customerLog,res);
  }
  

  @Get()
  findAll() {
    return this.customerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerService.findOne(+id);
  }

  @UsePipes(ValidationPipe)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomerDto: CustomerReg) {
    return this.customerService.update(+id, updateCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerService.remove(+id);
  }
  
  @Get(':id/orders')
  getCustomerOrders(@Param('id') id: string) {
    return this.customerService.getCustomerOrdersById(+id);
  }
}
