import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutsUsComponent } from './abouts-us/abouts-us.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: AboutsUsComponent }];


@NgModule({
  declarations: [AboutsUsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AboutusModule { }
