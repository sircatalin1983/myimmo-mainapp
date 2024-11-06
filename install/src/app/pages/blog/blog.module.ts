import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
//import { InformationComponent } from './main.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { CommentComponentsModule } from 'src/app/components/components.module';
@NgModule({
  imports: [
    CommonModule,
    CommentComponentsModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    BlogRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    TranslateModule
  ],
  declarations: [
    BlogComponent,
    BlogPostComponent,
    //  InformationComponent
  ],
  entryComponents: [
    //InformationComponent
  ]
})
export class BlogModule {
}
