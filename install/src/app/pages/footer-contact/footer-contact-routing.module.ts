import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterContactComponent } from './footer-contact.component';

const routes: Routes = [
  {
    path: '',
    component: FooterContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FooterContactRoutingModule { } 