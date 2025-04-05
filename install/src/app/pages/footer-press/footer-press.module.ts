import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterPressRoutingModule } from './footer-press-routing.module';
import { FooterPressComponent } from './footer-press.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [
        FooterPressComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FooterPressRoutingModule,
        MatDialogModule,
        MatFormFieldModule,
        MatSnackBarModule,
        TranslateModule
    ]
})
export class FooterPressModule { } 