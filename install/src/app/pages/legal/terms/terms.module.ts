import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TermsRoutingModule } from './terms-routing.module';
import { TermsComponent } from './terms.component';

@NgModule({
    declarations: [
        TermsComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        TermsRoutingModule
    ]
})
export class TermsModule { } 