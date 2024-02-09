/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
// import { ProductsService } from '../products/products.service';
// import { ProductsService } from '../products/products.service';

@Injectable()
export class OrdersService {
  constructor(@InjectModel('orders') private OrderModel, @InjectModel('products') private ProductModel) {}

  async create(order: any) {
    let newOrder = new this.OrderModel(order);
    await newOrder.save();
    return { message: "Order created successfully", data: newOrder };
  }

  findAll() {
    return this.OrderModel.find({});
  }

  async findOne(id: number) {
    return await this.OrderModel.find({ userID: id });
  }

  async findOneProducts(orderId: number) {
    let customerOrder = await this.OrderModel.find({ orderID: orderId  });

    if (!customerOrder) {
      return "no order found";
    }
    
    return await this.ProductModel.find({ productID: { $in: customerOrder.products } });
  }
}
