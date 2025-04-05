import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterPressComponent } from './footer-press.component';

const routes: Routes = [
    {
        path: '',
        component: FooterPressComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FooterPressRoutingModule { } 