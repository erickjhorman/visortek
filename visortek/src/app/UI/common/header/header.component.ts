import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  links: any[] = [
    {
      name: "Productos",
      path: "product"
    },
    {
      name: "Contactenos",
      path: "contact"
    },

    {
      name: "Acerca de nosotros",
      path: "about"
    },
  ];


  constructor() { }

  ngOnInit(): void {
    console.log(this.links);

  }

}
