import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterBlogRoutingModule } from './footer-blog-routing.module';
import { FooterBlogComponent } from './footer-blog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [
        FooterBlogComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FooterBlogRoutingModule,
        MatDialogModule,
        MatFormFieldModule,
        MatSnackBarModule,
        TranslateModule
    ]
})
export class FooterBlogModule { } 