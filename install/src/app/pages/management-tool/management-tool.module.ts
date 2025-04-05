import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ManagementToolRoutingModule } from './management-tool-routing.module';
import { ManagementToolComponent } from './management-tool.component';
//import { InformationComponent } from './main.component';
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
    ManagementToolRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  declarations: [
    ManagementToolComponent,
    //  InformationComponent
  ],
  entryComponents: [
    //InformationComponent
  ]
})
export class ManagementToolModule {
}
