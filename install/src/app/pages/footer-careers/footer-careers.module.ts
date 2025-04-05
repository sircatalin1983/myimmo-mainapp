import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterCareersRoutingModule } from './footer-careers-routing.module';
import { FooterCareersComponent } from './footer-careers.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [
        FooterCareersComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FooterCareersRoutingModule,
        MatDialogModule,
        MatFormFieldModule,
        MatSnackBarModule,
        TranslateModule
    ]
})
export class FooterCareersModule { } 