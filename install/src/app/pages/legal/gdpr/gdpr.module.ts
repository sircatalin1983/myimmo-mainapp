import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { GdprRoutingModule } from './gdpr-routing.module';
import { GdprComponent } from './gdpr.component';

@NgModule({
    declarations: [
        GdprComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        GdprRoutingModule
    ]
})
export class GdprModule { } 