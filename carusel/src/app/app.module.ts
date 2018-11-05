import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CarouselModule } from './components/carousel/carousel.module';
import {BrowserXhr, HttpModule} from "@angular/http";
import {CustomBrowserXhr} from "./BaseXhr";

@NgModule({
  imports:      [ BrowserModule, FormsModule, CarouselModule,HttpModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers:     [{provide: BrowserXhr, useClass: CustomBrowserXhr}]
 })
export class AppModule { }
