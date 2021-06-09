import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Calculator2RoutingModule } from './calculator2-routing.module';
import { Calculator2Component } from './calculator2.component';
//import { InformationComponent } from './main.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    Calculator2RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule
  ],
  declarations: [
    Calculator2Component,
    //  InformationComponent
  ],
  entryComponents: [
    //InformationComponent
  ]
})
export class Calculator2Module {
}
