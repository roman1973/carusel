import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CarouselComponent } from './carousel.componrnt';

@NgModule({
  imports:      [ BrowserAnimationsModule ],
  declarations: [ CarouselComponent ],
  exports:    [ CarouselComponent ]
})
export class CarouselModule { }
