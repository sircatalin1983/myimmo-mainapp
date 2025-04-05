import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterCollaborationComponent } from './footer-collaboration.component';

const routes: Routes = [
    {
        path: '',
        component: FooterCollaborationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FooterCollaborationRoutingModule { } 