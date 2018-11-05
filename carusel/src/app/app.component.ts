import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs/Rx';
import {Http,Response} from "@angular/http";


@Component({
  selector: 'my-app',
  template: `
    <h1>{{numslide + 1}} / {{images.length}}</h1>
    <pre>click left and right sides of the image to browse</pre>

    <carousel 
      [images]="images"
      [numslide]="numslide"
      (change)="onChange($event)"></carousel>
  `,
  styles: [`
    h1, pre { text-align: center }
  `]
})
export class AppComponent implements OnInit, OnDestroy {
  index;
  numslide;
  dateSubscription: Subscription;

  constructor(private http: Http) {
  }

  ngOnInit() {
    this.dateSubscription = Observable.timer(0, 2000)
      .switchMap((x) => this.http.get('http://localhost:3000/getRandom'))
      .map((response: Response) => response.json())
      .map(res => res.number)
      .subscribe(
        (v) =>  this.numslide = v,
          err => console.error(err)
      );

  }

  images = [
    'https://placeimg.com/300/300/nature/0',
    'https://placeimg.com/300/300/nature/9',
    'https://placeimg.com/300/300/nature/8',
    'https://placeimg.com/300/300/nature/7',
    'https://placeimg.com/300/300/nature/6',
    'https://placeimg.com/300/300/nature/5',
    'https://placeimg.com/300/300/nature/4',
    'https://placeimg.com/300/300/nature/3',
    'https://placeimg.com/300/300/nature/2',
    'https://placeimg.com/300/300/nature/1',
  ];

  onChange(idx) {
    this.index = idx;
  }

  ngOnDestroy() {
    if (this.dateSubscription) {
      this.dateSubscription.unsubscribe();
    }
  }
}
