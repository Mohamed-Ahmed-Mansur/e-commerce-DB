import { ProductsService } from './products.service';
import { ProductDto } from './product.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(product: ProductDto): Promise<{
        message: string;
        data: any;
    }>;
    findAll(): any;
    findOne(id: string): Promise<any>;
    update(id: string, product: ProductDto): Promise<any>;
    remove(id: string): Promise<any>;
}
