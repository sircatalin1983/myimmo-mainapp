import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Solution4RoutingModule } from './solution4-routing.module';
import { Solution4Component } from './solution4.component';
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
    Solution4RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  declarations: [
    Solution4Component,
    //  InformationComponent
  ],
  entryComponents: [
    //InformationComponent
  ]
})
export class Solution4Module {
}
