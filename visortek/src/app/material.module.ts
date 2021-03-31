import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

const materialModule = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule
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
