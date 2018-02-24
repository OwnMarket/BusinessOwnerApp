import { Component, Input, ViewChild } from '@angular/core';
import { IonicPage, Content, ActionSheetController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'action-sheet-layout-2',
  templateUrl: 'action-sheet.html'
})
export class ActionSheetLayout2 {
  @Input() data: any;
  @Input() events: any;
  @ViewChild(Content)
  content: Content;

  active: boolean;
  headerImage: any = "";

  constructor(public actionSheetCtrl: ActionSheetController) { }

  onEvent(event: string, item: any, e: any) {
    if (e) {
      e.stopPropagation();
    }
    if (this.events[event]) {
      this.events[event](item);
    }
  }

  onStarClass(items: any, index: number, e: any) {
    for (var i = 0; i < items.length; i++) {
      items[i].isActive = i <= index;
    }
    this.onEvent("onRates", index, e);
  }

  ngAfterViewInit() {
    this.subscribeToIonScroll();
  }

  isClassActive() {
    return this.active;
  }

  ngOnChanges(changes: { [propKey: string]: any }) {
    if (changes.data && changes.data.currentValue) {
      this.headerImage = changes.data.currentValue.headerImage;
    }
    this.subscribeToIonScroll();
  }

  subscribeToIonScroll() {
    if (this.content != null && this.content.ionScroll != null) {
      this.content.ionScroll.subscribe((d) => {
        if (d.scrollTop < 180) {
          this.active = false;
          return;
        }
        this.active = true;
      });
    }
  }

  presentActionSheet(item, index) {
    var that = this;
    this.data.actionSheet.buttons.forEach(element => {
      element["handler"] = function () {
        that.onEvent("onItemClickActionSheet", { "button": element, "item": item }, null);
      }
    });
    const actionSheet = this.actionSheetCtrl.create(this.data.actionSheet);
    actionSheet.present();
  }
}
