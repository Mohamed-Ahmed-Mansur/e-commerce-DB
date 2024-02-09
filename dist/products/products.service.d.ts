import { ProductDto } from './product.dto';
export declare class ProductsService {
    private ProductModel;
    constructor(ProductModel: any);
    create(product: ProductDto): Promise<{
        message: string;
        data: any;
    }>;
    findAll(): any;
    findOne(id: number): Promise<any>;
    update(id: number, product: ProductDto): Promise<any>;
    remove(id: number): Promise<any>;
}
