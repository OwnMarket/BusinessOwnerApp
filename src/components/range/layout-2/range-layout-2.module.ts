import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RangeLayout2 } from './range-layout-2';

@NgModule({
    declarations: [
        RangeLayout2,
    ],
    imports: [
        IonicPageModule.forChild(RangeLayout2),
    ],
    exports: [
        RangeLayout2
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class RangeLayout2Module { }
