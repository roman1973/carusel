import { Injectable } from '@angular/core';
import {BrowserXhr} from "@angular/http";
// import {BrowserXhr} from '@angular/common/http/src/xhr';

@Injectable()
export class CustomBrowserXhr extends BrowserXhr {
  constructor() {
    super();
  }
  build(): any {
    let xhr = super.build();
    xhr.withCredentials = true;
    return <any>(xhr);
  }
}
