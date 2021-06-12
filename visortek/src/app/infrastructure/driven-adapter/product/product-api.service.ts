import { ProductGateway } from '@app/domain/models/Product/gateway/product-gateway';
import { Injectable } from '@angular/core';
import { Product } from '@app/domain/models/Product/Product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {environment} from '@env';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService extends ProductGateway {

  constructor(private httpclient: HttpClient) { super(); }


  getById(id: string): Observable<Product> {
    throw new Error('Method not implemented.');
  }
  getAll(): Observable<Product[]> {
    return this.httpclient.get<Product[]>(environment.api_url);
  }
  save(product: Product): Observable<Product> {
    throw new Error('Method not implemented.');
  }
  show(id: string): Observable<Product> {
    throw new Error('Method not implemented.');
  }
}
