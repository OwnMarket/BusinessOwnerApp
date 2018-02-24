import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ToggleLayout2 } from './toggle-layout-2';

@NgModule({
    declarations: [
        ToggleLayout2,
    ],
    imports: [
        IonicPageModule.forChild(ToggleLayout2),
    ],
    exports: [
        ToggleLayout2
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ToggleLayout2Module { }
