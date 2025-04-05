import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PrivacyRoutingModule } from './privacy-routing.module';
import { PrivacyComponent } from './privacy.component';

@NgModule({
    declarations: [
        PrivacyComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        PrivacyRoutingModule
    ]
})
export class PrivacyModule { } 