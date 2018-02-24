import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RangeLayout4 } from './range-layout-4';

@NgModule({
    declarations: [
        RangeLayout4,
    ],
    imports: [
        IonicPageModule.forChild(RangeLayout4),
    ],
    exports: [
        RangeLayout4
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class RangeLayout4Module { }
