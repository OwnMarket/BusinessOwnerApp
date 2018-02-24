import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActionSheetLayout2 } from './action-sheet-layout-2';
import { ElasticHeaderModule } from '../../elastic-header/elastic-header.module';

@NgModule({
    declarations: [
        ActionSheetLayout2,
    ],
    imports: [
        IonicPageModule.forChild(ActionSheetLayout2),
        ElasticHeaderModule
    ],
    exports: [
        ActionSheetLayout2
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ActionSheetLayout2Module { }
