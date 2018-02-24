import { Component, Input, ViewChild } from '@angular/core';
import { IonicPage, Slides } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'wizard-layout-3',
    templateUrl: 'wizard.html'
})

export class WizardLayout3 {
    @Input() data: any;
    @Input() events: any;
    @ViewChild('wizardSlider') slider: Slides;

    next:boolean = true;
    finish:boolean = true

    constructor() {
        this.next = true;
        this.finish = false;
    }

    changeSlide(index: number): void {
        if (index > 0) {
            this.slider.slideNext(300);
        } else {
            this.slider.slidePrev(300);
        }
    }

    slideHasChanged(index: number): void {
        try {
            this.next = this.slider.getActiveIndex() < (this.slider.length() - 1);
            this.finish = this.slider.isEnd();
        } catch (e) { }
    }

    onEvent(event: string) {
        if (this.events[event]) {
            this.events[event]();
        }
    }
}
