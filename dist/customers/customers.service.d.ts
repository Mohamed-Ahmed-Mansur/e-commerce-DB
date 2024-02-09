import { CustomerDto } from './customer.dto';
export declare class CustomersService {
    private CustomerModel;
    constructor(CustomerModel: any);
    create(Customer: CustomerDto): Promise<{
        message: string;
        data: any;
    }>;
    findAll(): any;
    findOne(id: number): Promise<any>;
    update(id: number, Customer: CustomerDto): Promise<any>;
    remove(id: number): Promise<any>;
}
