import { Component, OnInit } from '@angular/core';
import { faFacebook,faInstagram } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faFacebook = faFacebook;
  faInstagram = faInstagram;


  links: any[] = [
    {
      name: "Home",
      path: ""
    },
    {
      name: "Productos",
      path: "product"
    },
    
    {
      name: "Acerca de nosotros",
      path: "about"
    },
    {
      name: "Contactenos",
      path: "contact"
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
