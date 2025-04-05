import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivacyPolicyComponent } from './privacy-policy.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslateModule } from '@ngx-translate/core';
import { PrivacyPolicyRoutingModule } from './privacy-policy-routing.module';

@NgModule({
    declarations: [PrivacyPolicyComponent],
    imports: [
        CommonModule,
        PrivacyPolicyRoutingModule,
        MatSnackBarModule,
        TranslateModule
    ]
})
export class PrivacyPolicyModule { } 