import { Component, OnInit } from '@angular/core';

import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.css']
})
export class MainSliderComponent implements OnInit {

  images : any = [];
  constructor(private ngbCarouselConfig:NgbCarouselConfig) { }

  ngOnInit(): void {
    this.images = [{
      image: "https://res.cloudinary.com/dwocz6qj8/image/upload/v1620517086/visortek/home/6_wwwhmn.webp",
      alt: "The best sale"
    },
    {
      image: "https://res.cloudinary.com/dwocz6qj8/image/upload/v1620517580/visortek/home/7_gpte6t.webp",
      alt: "The best sale 2"
    }
  ]
    this.corouselConfi();
  }

  corouselConfi(): void{
    this.ngbCarouselConfig.interval = 5000;
    this.ngbCarouselConfig.pauseOnHover = true;
    this.ngbCarouselConfig.showNavigationArrows = false;
  }

}
