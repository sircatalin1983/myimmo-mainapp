import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CookiePreferencesComponent } from './cookie-preferences.component';

const routes: Routes = [
    {
        path: '',
        component: CookiePreferencesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CookiePreferencesRoutingModule { } 