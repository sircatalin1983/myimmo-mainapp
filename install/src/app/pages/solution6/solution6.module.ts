import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Solution6RoutingModule } from './solution6-routing.module';
import { Solution6Component } from './solution6.component';
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
    Solution6RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  declarations: [
    Solution6Component,
    //  InformationComponent
  ],
  entryComponents: [
    //InformationComponent
  ]
})
export class Solution6Module {
}
