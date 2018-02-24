import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RadioButtonLayout3 } from './radio-button-layout-3';

@NgModule({
    declarations: [
        RadioButtonLayout3,
    ],
    imports: [
        IonicPageModule.forChild(RadioButtonLayout3),
    ],
    exports: [
        RadioButtonLayout3
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class RadioButtonLayout3Module { }
