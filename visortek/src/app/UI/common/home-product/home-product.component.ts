import { Component, OnInit } from '@angular/core';
import { Product } from '@app/domain/models/Products/gateway/IProducts';

@Component({
  selector: 'app-home-product',
  templateUrl: './home-product.component.html',
  styleUrls: ['./home-product.component.css']
})
export class HomeProductComponent implements OnInit {

   products: Product[] = [
    { 
      name:"Shaft 821", 
      description:"The best one in the world", 
      image:"https://res.cloudinary.com/dwocz6qj8/image/upload/v1617158638/visortek/shaft581_dyaf2o.jpg" 
    },
    { 
      name:"Shaft 571", 
      description:"The best one for you", 
      image:"https://res.cloudinary.com/dwocz6qj8/image/upload/v1617158638/visortek/571_jmy0nk.jpg" 
    },
    { 
      name:"Shaft 520", 
      description:"The best one in the world now", 
      image:"https://res.cloudinary.com/dwocz6qj8/image/upload/v1617158638/visortek/520_rvfywz.jpg" 
    }
   ];


  constructor() { }

  ngOnInit(): void {
  }
}
