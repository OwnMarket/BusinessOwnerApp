import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ToggleLayout1 } from './toggle-layout-1';

@NgModule({
    declarations: [
        ToggleLayout1,
    ],
    imports: [
        IonicPageModule.forChild(ToggleLayout1),
    ],
    exports: [
        ToggleLayout1
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ToggleLayout1Module { }
