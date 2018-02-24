import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActionSheetLayout3 } from './action-sheet-layout-3';

@NgModule({
    declarations: [
        ActionSheetLayout3,
    ],
    imports: [
        IonicPageModule.forChild(ActionSheetLayout3)
    ],
    exports: [
        ActionSheetLayout3
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ActionSheetLayout3Module { }
