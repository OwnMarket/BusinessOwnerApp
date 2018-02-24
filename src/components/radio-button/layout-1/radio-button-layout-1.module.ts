import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RadioButtonLayout1 } from './radio-button-layout-1';

@NgModule({
    declarations: [
        RadioButtonLayout1,
    ],
    imports: [
        IonicPageModule.forChild(RadioButtonLayout1),
    ],
    exports: [
        RadioButtonLayout1
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class RadioButtonLayout1Module { }
