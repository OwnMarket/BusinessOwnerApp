import { Component, Input } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'range-button-layout-2',
  templateUrl: 'range.html'
})
export class RangeLayout2 {
  @Input('data') data: any;
  @Input('events') events: any;

  constructor() { }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
    console.log(changes['data']);
  }

  onEvent = (event: string, item: any): void => {
    if (this.events[event]) {
      this.events[event](item);
    }
  }
}
