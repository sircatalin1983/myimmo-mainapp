import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterCookiePolicyRoutingModule } from './footer-cookie-policy-routing.module';
import { FooterCookiePolicyComponent } from './footer-cookie-policy.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSnackBarModule,
    FooterCookiePolicyRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  declarations: [
    FooterCookiePolicyComponent
  ]
})
export class FooterCookiePolicyModule { } 