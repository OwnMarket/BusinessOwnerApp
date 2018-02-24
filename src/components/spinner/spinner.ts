import { Component, Input } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'spinner',
    templateUrl: 'spinner.html'
})
export class Spinner {
  @Input('data') data: any;
  path : string;

  constructor() {}

  getData = ():any => {
    return this.data;
  }

  ngOnChanges(changes: {[propKey: string]: any}) {
    this.path = "assets/svg/" +  changes['data'].currentValue.icon + ".svg";
  }
}
