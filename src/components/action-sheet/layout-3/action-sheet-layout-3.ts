import { Component, Input, ViewChild } from '@angular/core';
import { IonicPage, Content, ActionSheetController } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'action-sheet-layout-3',
    templateUrl: 'action-sheet.html'
})
export class ActionSheetLayout3 {
    @Input() data: any;
    @Input() events: any;
    @ViewChild(Content)
    content: Content;
    slider = {};

    constructor(public actionSheetCtrl: ActionSheetController) { }

    slideHasChanged(slider, index): void {
        this.slider[index] = slider;
        if (2 == slider._activeIndex) {
            if (this.data.items) {
                this.data.items.splice(index, 1);
            } else {
                this.data.splice(index, 1);
            }
        }
    }

    onClickEvent(index): void {
        if (this.slider[index]) {
            this.slider[index].slidePrev(300);
        }
    }

    onEvent(event: string, item: any, e: any) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
    }

    ngOnChanges(changes: { [propKey: string]: any }) {
    }

    presentActionSheet(item, index) {
        var that = this;
        this.data.actionSheet.buttons.forEach(element => {
            element["handler"] = function () {
                that.onEvent("onItemClickActionSheet", {"button":element, "item": item}, null);
            }
        });
        const actionSheet = this.actionSheetCtrl.create(this.data.actionSheet);
        actionSheet.present();
    }
}
