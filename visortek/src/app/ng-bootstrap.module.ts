import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';

const ngBootstrap = [
  NgbCarouselModule
]



@NgModule({
  declarations: [],
  imports: [...ngBootstrap
  ],
  exports:[
    ...ngBootstrap
  ]
})
export class NgBootstrapModule { }
