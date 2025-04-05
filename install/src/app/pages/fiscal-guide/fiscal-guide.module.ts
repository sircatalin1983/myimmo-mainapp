import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FiscalGuideRoutingModule } from './fiscal-guide-routing.module';
import { FiscalGuideComponent } from './fiscal-guide.component';
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
    FiscalGuideRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  declarations: [
    FiscalGuideComponent,
    //  InformationComponent
  ],
  entryComponents: [
    //InformationComponent
  ]
})
export class FiscalGuideModule {
}
