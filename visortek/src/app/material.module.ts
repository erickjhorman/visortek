import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

const materialModule = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule
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
