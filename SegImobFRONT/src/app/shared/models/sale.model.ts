import { Product } from './product.model';
import { Seller } from './seller.model';

export class Sale {
    Id?: number;
    ProductId: number;
    Product?: Product;
    SellerId: number;
    Seller?: Seller;
    Commission: number;
}

export interface SalesViewModel {
    Product: Product;
    Seller: Seller;
    Commission: number;
}
