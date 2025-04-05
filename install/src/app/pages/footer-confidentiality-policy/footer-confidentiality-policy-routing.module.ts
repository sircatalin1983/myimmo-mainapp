import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterConfidentialityPolicyComponent } from './footer-confidentiality-policy.component';

const routes: Routes = [
  {
    path: '',
    component: FooterConfidentialityPolicyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FooterConfidentialityPolicyRoutingModule { } 