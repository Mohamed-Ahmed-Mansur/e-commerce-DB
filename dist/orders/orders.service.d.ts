export declare class OrdersService {
    private OrderModel;
    private ProductModel;
    constructor(OrderModel: any, ProductModel: any);
    create(order: any): Promise<{
        message: string;
        data: any;
    }>;
    findAll(): any;
    findOne(id: number): Promise<any>;
    findOneProducts(orderId: number): Promise<any>;
}
