import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectLayout3 } from './select-layout-3';

@NgModule({
    declarations: [
        SelectLayout3,
    ],
    imports: [
        IonicPageModule.forChild(SelectLayout3),
    ],
    exports: [
        SelectLayout3
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SelectLayout3Module { }
