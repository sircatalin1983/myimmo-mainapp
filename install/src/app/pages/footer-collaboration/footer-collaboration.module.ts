import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterCollaborationComponent } from './footer-collaboration.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslateModule } from '@ngx-translate/core';
import { FooterCollaborationRoutingModule } from './footer-collaboration-routing.module';

@NgModule({
    declarations: [
        FooterCollaborationComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FooterCollaborationRoutingModule,
        MatDialogModule,
        MatFormFieldModule,
        MatSnackBarModule,
        TranslateModule
    ]
})
export class FooterCollaborationModule { } 