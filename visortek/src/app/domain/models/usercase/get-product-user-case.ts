import { Product } from '@app/domain/models/Product/Product';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { ProductGateway } from "@app/domain/models/Product/gateway/product-gateway";

@Injectable({
    providedIn: 'root'
})

export class GetProductUserCases {
    constructor(private productGateway: ProductGateway) { }

    getProductById(id: string): Observable<Product> {
        return this.productGateway.getById(id);
    }

    getAllProduct(): Observable<Array<Product>> {
        return this.productGateway.getAll();
    }
}