import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

   links: any[] = [
    {
      name: "Catalogos",
      path: "catalogue"
    },
    {
      name: "Acerca de nosotros",
      path: "about"
    },
    {
      name: "Nuestos productos",
      path: "product"
    }
 
  ];


  constructor() { }

  ngOnInit(): void {
    console.log(this.links);
    
  }

}
