import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectLayout5 } from './select-layout-5';

@NgModule({
    declarations: [
        SelectLayout5,
    ],
    imports: [
        IonicPageModule.forChild(SelectLayout5),
    ],
    exports: [
        SelectLayout5
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SelectLayout5Module { }
