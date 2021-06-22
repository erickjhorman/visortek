import { NgModule } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';


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
