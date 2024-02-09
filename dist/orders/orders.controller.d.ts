import { OrdersService } from './orders.service';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(order: any): Promise<{
        message: string;
        data: any;
    }>;
    findAll(): any;
    findOne(id: string): Promise<any>;
    findOneProducts(orderId: string): Promise<any>;
}
