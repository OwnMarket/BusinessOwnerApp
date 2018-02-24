import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectLayout2 } from './select-layout-2';

@NgModule({
    declarations: [
        SelectLayout2,
    ],
    imports: [
        IonicPageModule.forChild(SelectLayout2),
    ],
    exports: [
        SelectLayout2
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SelectLayout2Module { }
