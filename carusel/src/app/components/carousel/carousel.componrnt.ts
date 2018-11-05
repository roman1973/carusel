import {AfterContentInit, Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'carousel',
  animations: [
    trigger('thumbState', [
      state('inactive', style({
        opacity: 0, transform: 'scale(0.5)'
      })),
      state('active', style({
        opacity: 1, transform: 'scale(1)'
      })),
      // cubic-bezier from http://easings.net/
      transition('inactive => active', animate('500ms cubic-bezier(0.785, 0.135, 0.15, 0.86)')),
      transition('active => inactive', animate('500ms cubic-bezier(0.785, 0.135, 0.15, 0.86)'))
    ])
  ],
  styles: [`
    .tmb img { 
        position: absolute;
        left: 50%;
        width: 300px;
        margin-left: -150px; 
    }
  `],
  template: `
      <div [@thumbState]="idx === counter ? 'active' : 'inactive'" class="tmb"
        *ngFor="let img of images; let idx = index">
        <img [src]="img" (click)="onClickThumb($event)"/>
      </div>
  `
})
export class CarouselComponent implements AfterContentInit,OnChanges {
  @Input() images: Array<string>;
  @Input() numslide:number;
  @Output() change: EventEmitter<number> = new EventEmitter<number>();
  counter = 0;

  ngAfterContentInit() {
    this.change.emit(0);
  }
ngOnChanges(){
    this.counter = this.numslide || 2
}
  onClickThumb(event) {
    const total = this.images.length - 1;
    this.counter = event.layerX < 150 ? this.dec(total) : this.inc(total);
    this.change.emit(this.counter);
  }

  inc(total) {
    return (this.counter < total ) ? this.counter + 1 : 0 ;
  }

  dec(total) {
    return (this.counter > 0 ) ? this.counter - 1 : total ;
  }
}
