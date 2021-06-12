import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GetProductUserCases } from '@app/domain/models/usercase/get-product-user-case';
import {Product} from '@app/domain/models/Product/IProduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];

  constructor(private route: ActivatedRoute,
    private getProductCases: GetProductUserCases) { }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.getProducts();
  }

  getProducts(){
     this.getProductCases.getAllProduct().subscribe(res => {
      this.products = res;
     })
  }

}
