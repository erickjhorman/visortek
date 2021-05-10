import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  
})
export class FooterComponent implements OnInit {

  faFacebook = faFacebook;
  faInstagram = faInstagram;
  isAnimated : boolean;

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

  listsBotton: any[] = [
    {
      name: "Politica de privacidad",
      path: "private-policy"
    },
    {
      name: "Contactenos",
      path: "FQA"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
