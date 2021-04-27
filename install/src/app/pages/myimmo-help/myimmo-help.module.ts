import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MyImmoHelpRoutingModule } from './myimmo-help-routing.module';
import { MyImmoHelpComponent } from './myimmo-help.component';
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
    MyImmoHelpRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    MyImmoHelpComponent,
    //  InformationComponent
  ],
  entryComponents: [
    //InformationComponent
  ]
})
export class MyImmoHelpModule {
}
