import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Solution1RoutingModule } from './solution1-routing.module';
import { Solution1Component } from './solution1.component';
//import { InformationComponent } from './main.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSnackBarModule,
    Solution1RoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    Solution1Component,
    //  InformationComponent
  ],
  entryComponents: [
    //InformationComponent
  ]
})
export class Solution1Module {
}
