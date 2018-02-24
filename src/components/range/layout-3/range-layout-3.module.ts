import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RangeLayout3 } from './range-layout-3';

@NgModule({
    declarations: [
        RangeLayout3,
    ],
    imports: [
        IonicPageModule.forChild(RangeLayout3),
    ],
    exports: [
        RangeLayout3
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class RangeLayout3Module { }
