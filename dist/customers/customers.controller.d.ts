import { CustomerService } from './customer.service';
import { CustomerReg } from './dto/customer-reg';
import { CustomerLog } from './dto/customer-log';
import { Response } from 'express';
export declare class CustomerController {
    private readonly customerService;
    constructor(customerService: CustomerService);
    Reg(customerReg: CustomerReg): any;
    Login(customerLog: CustomerLog, res: Response): any;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, updateCustomerDto: CustomerReg): any;
    remove(id: string): any;
    getCustomerOrders(id: string): any;
}
