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


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    MainSliderComponent,
   
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class HomeModule { }
