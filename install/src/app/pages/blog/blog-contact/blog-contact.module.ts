import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogContactRoutingModule } from './blog-contact-routing.module';
import { BlogContactComponent } from './blog-contact.component';
//import { InformationComponent } from './main.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    BlogContactComponent,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    TranslateModule
  ],
  declarations: [
    BlogContactComponent,
    //  InformationComponent
  ],
  entryComponents: [
    //InformationComponent
  ]
})
export class BlogContactModule {
}
