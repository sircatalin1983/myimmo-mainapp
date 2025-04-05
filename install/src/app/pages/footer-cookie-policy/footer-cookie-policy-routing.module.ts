import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterCookiePolicyComponent } from './footer-cookie-policy.component';

const routes: Routes = [
  {
    path: '',
    component: FooterCookiePolicyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FooterCookiePolicyRoutingModule { } 