import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ToggleLayout3 } from './toggle-layout-3';

@NgModule({
    declarations: [
        ToggleLayout3,
    ],
    imports: [
        IonicPageModule.forChild(ToggleLayout3),
    ],
    exports: [
        ToggleLayout3
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ToggleLayout3Module { }
