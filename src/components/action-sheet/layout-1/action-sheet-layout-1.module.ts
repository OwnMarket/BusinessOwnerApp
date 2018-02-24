import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActionSheetLayout1 } from './action-sheet-layout-1';
import { ElasticHeaderModule } from '../../elastic-header/elastic-header.module';

@NgModule({
    declarations: [
        ActionSheetLayout1,
    ],
    imports: [
        IonicPageModule.forChild(ActionSheetLayout1),
        ElasticHeaderModule
    ],
    exports: [
        ActionSheetLayout1
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ActionSheetLayout1Module { }
