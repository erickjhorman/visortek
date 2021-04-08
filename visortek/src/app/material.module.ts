import { NgModule } from '@angular/core';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';


const materialModule = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatListModule
 ]
@NgModule({
  declarations: [],
  imports: [ 
    ...materialModule
  ],
  exports:[
    ...materialModule
  ]
})
export class MaterialModule { }
