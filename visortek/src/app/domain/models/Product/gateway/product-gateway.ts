import { Product } from '@app/domain/models/Product/Product';
import { Observable } from 'rxjs';

export abstract class ProductGateway {
    abstract getById(id: string): Observable<Product>;
    abstract getAll(): Observable<Array<Product>>;
    abstract save(product:Product): Observable<Product>;
    abstract show(id: string): Observable<Product>;
}