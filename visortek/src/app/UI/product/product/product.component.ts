import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GetProductUserCases } from '@app/domain/models/usercase/get-product-user-case';
import { Product } from '@app/domain/models/Product/IProduct';
import { Images } from '@app/domain/models/Product/IImages';

import { ProductDetailsComponent } from '@UI/product/product-details/product-details.component';

import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  images: Images[] = [];

  constructor(private route: ActivatedRoute,
    private getProductCases: GetProductUserCases,
    public dialog: MatDialog) { }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.getProducts();
  }

  getProducts() {
    this.getProductCases.getAllProduct().subscribe(res => {
      this.products = res;
      this.images = this.getImages(this.products);
      console.log(this.images);
    },
      err => {
        console.log(err)
      })
  }

  getImages(images): Array<Images> {
    return images.map(item => item.images);
  }

  onShowImages(id: string) {
    const images = this.images.find(items => items.id === id);
    this.dialog.open(ProductDetailsComponent, {
      data: {images: images.images},
      height: '430px',
      width:'600px'
    });
  }

}
