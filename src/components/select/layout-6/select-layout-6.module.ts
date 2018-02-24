import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectLayout6 } from './select-layout-6';

@NgModule({
    declarations: [
        SelectLayout6,
    ],
    imports: [
        IonicPageModule.forChild(SelectLayout6),
    ],
    exports: [
        SelectLayout6
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SelectLayout6Module { }
