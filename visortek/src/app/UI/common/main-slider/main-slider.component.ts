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
      image: "https://res.cloudinary.com/dequvdgav/image/upload/v1571806956/visorteck/1_hlpann.jpg"
    },
    {
      image: "https://res.cloudinary.com/dequvdgav/image/upload/v1571806956/visorteck/1_hlpann.jpg"
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
