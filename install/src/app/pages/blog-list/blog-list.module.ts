import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
//import { InformationComponent } from './main.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { CommentComponentsModule } from 'src/app/components/components.module';
import { BlogListComponent } from './blog-list.component';
import { BlogListRoutingModule } from './blog-list-routing.module';
@NgModule({
  imports: [
    CommonModule,
    CommentComponentsModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,    
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    TranslateModule,
    BlogListRoutingModule,
  ],
  declarations: [
    BlogListComponent,
    //  InformationComponent
  ],
  entryComponents: [
    //InformationComponent
  ]
})
export class BlogListModule {
}
