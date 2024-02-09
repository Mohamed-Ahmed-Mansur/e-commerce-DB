/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CustomerDto } from './customer.dto';
import { InjectModel } from '@nestjs/mongoose';
// import { CreateCustomerDto } from './dto/create-customer.dto';
// import { UpdateCreateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomersService {
  // private Customers: CustomerDto[] = [];
  constructor(@InjectModel('cutomers') private CustomerModel) {}

  async create(Customer: CustomerDto) {
    let newCustomer = new this.CustomerModel(Customer)
    await newCustomer.save()
    return {message:"Added Successfully",data: newCustomer};
  }

  findAll() {
    return this.CustomerModel.find({});
  }

  async findOne(id: number) {
    return await this.CustomerModel.findOne({userID: id});
  }

  async update(id: number, Customer: CustomerDto) {
    if (await this.CustomerModel.findOne({email: Customer.email})) {
      return "email already exist"
    }
    await this.CustomerModel.updateOne({userID: id}, {$set: Customer})
    return this.CustomerModel.find({});
  }

  async remove(id: number) {
    await this.CustomerModel.deleteOne({userID: id})
    return this.CustomerModel.find({});
  }
}
