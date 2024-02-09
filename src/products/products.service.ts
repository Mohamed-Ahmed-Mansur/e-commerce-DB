/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ProductDto } from './product.dto'; 
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductsService {
  constructor(@InjectModel('products') private ProductModel) {}

  async create(product: ProductDto) {
    let newProduct = new this.ProductModel(product);
    await newProduct.save();
    return { message: "Added Successfully", data: newProduct };
  }

  findAll() {
    return this.ProductModel.find({});
  }

  async findOne(id: number) {
    return await this.ProductModel.findOne({ productID: id });
  }

  async update(id: number, product: ProductDto) {
    // if (await this.ProductModel.findOne({ name: product.name })) {
    //   return "product already exists";
    // }
    await this.ProductModel.updateOne({ productID: id }, { $set: product });
    return this.ProductModel.find({});
  }

  async remove(id: number) {
    await this.ProductModel.deleteOne({ productID: id });
    return this.ProductModel.find({});
  }
}
