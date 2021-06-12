import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from '@UI/common/footer/footer.component';
import { HeaderComponent } from '@UI/common/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

import {ProductGateway} from '@app/domain/models/Product/gateway/product-gateway';

import {ProductApiService} from '@app/infrastructure/driven-adapter/product/product-api.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatButtonModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [{provide: ProductGateway, useClass: ProductApiService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
