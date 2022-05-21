import { BeerService } from './services/beer.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BeerComponent } from './components/beer/beer.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, BeerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,

],

  providers: [
    BeerService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
