import { Component, OnInit,ViewChild,ViewEncapsulation } from '@angular/core';
import {MatMenuTrigger} from '@angular/material/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  @ViewChild('visores', {static: true}) visores: MatMenuTrigger

  links: any[] = [
    {
      name: "Contactenos",
      path: "contact"
    },

    {
      name: "Acerca de nosotros",
      path: "about"
    },
  ];

  products: any[] = [
    {
      id: "1",
      name: "Visores",
      visores :  [
         {
           id:"1",
           brand: "Shaft"
         },
         {
          id:"2",
          brand: "Kontrol"
        },
        {
          id:"3",
          brand: "ICH"
        }
      ]
     },
     {
      id: "2",
      name: "Botones",
      botones :  [
         {
           id:"1",
           brand: "Shaft"
         },
         {
          id:"2",
          brand: "Kontrol"
        },
        {
          id:"3",
          brand: "ICH"
        }
      ]
     },
   ]
 

  constructor() { }

  ngOnInit(): void {
    console.log(this.links);
    console.log(this.visores);
    
  }

  someMethod() {
    console.log("click on animal index");
    const menu = this.visores;
    console.log("menu",menu)
    
  }

  createProductsMenu(){
    //this.trigger;
  }

}
