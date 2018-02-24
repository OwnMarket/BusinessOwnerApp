import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RangeLayout1 } from './range-layout-1';

@NgModule({
    declarations: [
        RangeLayout1,
    ],
    imports: [
        IonicPageModule.forChild(RangeLayout1),
    ],
    exports: [
        RangeLayout1
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class RangeLayout1Module { }
