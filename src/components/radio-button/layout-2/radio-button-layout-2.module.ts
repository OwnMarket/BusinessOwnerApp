import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RadioButtonLayout2 } from './radio-button-layout-2';

@NgModule({
    declarations: [
        RadioButtonLayout2,
    ],
    imports: [
        IonicPageModule.forChild(RadioButtonLayout2),
    ],
    exports: [
        RadioButtonLayout2
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class RadioButtonLayout2Module { }
