import { Component, Input } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'register-layout-1',
    templateUrl: 'register.html'
})
export class RegisterLayout1 {

    @Input() data: any;
    @Input() events: any;

    firstName: string;
    lastName: string;
    businessName: string;

    constructor() { }

    onEvent = (event: string): void => {
        if (this.events[event]) {
            this.events[event]({
                'firstName': this.firstName,
                'lastName': this.lastName,
                'businessName': this.businessName
            });
        }
    }
}
