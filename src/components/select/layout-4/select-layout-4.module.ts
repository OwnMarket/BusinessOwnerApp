import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectLayout4 } from './select-layout-4';

@NgModule({
    declarations: [
        SelectLayout4,
    ],
    imports: [
        IonicPageModule.forChild(SelectLayout4),
    ],
    exports: [
        SelectLayout4
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SelectLayout4Module { }
