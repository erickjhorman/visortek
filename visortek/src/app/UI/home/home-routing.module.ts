import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import {HomeComponent} from '@UI/home/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent}];
  
@NgModule({
  declarations: [],
  imports:[RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
