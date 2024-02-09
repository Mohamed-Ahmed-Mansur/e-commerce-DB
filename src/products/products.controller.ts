/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UsePipes } from '@nestjs/common';
import { ProductsService } from './products.service'; // Assuming you have a ProductsService class
import { ProductDto } from './product.dto'; // Assuming you have a ProductDto class

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() product: ProductDto) {
    return this.productsService.create(product);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() product: ProductDto) {
    return this.productsService.update(+id, product);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
