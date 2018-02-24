import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectLayout1 } from './select-layout-1';

@NgModule({
    declarations: [
        SelectLayout1,
    ],
    imports: [
        IonicPageModule.forChild(SelectLayout1),
    ],
    exports: [
        SelectLayout1
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SelectLayout1Module { }
