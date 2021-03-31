import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import {HomeComponent} from '@UI/home/home/home.component';
import { HeaderComponent } from '../common/header/header.component';
import { FooterComponent } from '../common/footer/footer.component';
import { ContentComponent } from './home/content/content.component';
import { MainSliderComponent } from '../common/main-slider/main-slider.component';

//Materia module
import {MaterialModule} from '@app/material.module';

//ng-bootstrap module
import {NgBootstrapModule} from '@app/ng-bootstrap.module';
import { HomeProductComponent } from '../common/home-product/home-product.component';
@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    MainSliderComponent,
    HomeProductComponent,
   
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NgBootstrapModule
  ]
})
export class HomeModule { }
