/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { productSchema } from './products.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name:"products", schema: productSchema}])
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
