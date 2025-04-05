import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterCareersComponent } from './footer-careers.component';

const routes: Routes = [
    {
        path: '',
        component: FooterCareersComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FooterCareersRoutingModule { } 