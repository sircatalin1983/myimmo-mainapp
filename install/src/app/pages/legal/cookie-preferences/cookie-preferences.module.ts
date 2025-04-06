import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CookiePreferencesRoutingModule } from './cookie-preferences-routing.module';
import { CookiePreferencesComponent } from './cookie-preferences.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [
        CookiePreferencesComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        TranslateModule,
        MatSnackBarModule,
        MatIconModule,
        CookiePreferencesRoutingModule
    ]
})
export class CookiePreferencesModule { } 