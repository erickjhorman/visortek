import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@app/material.module';
import { NgBootstrapModule } from '@app/ng-bootstrap.module';
import { HomeComponent } from '@UI/home/home/home.component';
import { HomeProductComponent } from '../common/home-product/home-product.component';
import { MainSliderComponent } from '../common/main-slider/main-slider.component';
import { HomeRoutingModule } from './home-routing.module';
import { ContentComponent } from './home/content/content.component';

@NgModule({
  declarations: [
    HomeComponent,
    ContentComponent,
    MainSliderComponent,
    HomeProductComponent,
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    MaterialModule,
    NgBootstrapModule
  ]
})
export class HomeModule { }
