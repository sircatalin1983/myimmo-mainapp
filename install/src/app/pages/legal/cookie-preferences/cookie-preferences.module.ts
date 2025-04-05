import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookiePreferencesComponent } from './cookie-preferences.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslateModule } from '@ngx-translate/core';
import { CookiePreferencesRoutingModule } from './cookie-preferences-routing.module';

@NgModule({
    declarations: [CookiePreferencesComponent],
    imports: [
        CommonModule,
        CookiePreferencesRoutingModule,
        MatSnackBarModule,
        TranslateModule
    ]
})
export class CookiePreferencesModule { } 