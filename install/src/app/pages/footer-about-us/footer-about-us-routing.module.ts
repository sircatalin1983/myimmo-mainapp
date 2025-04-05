import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterAboutUsComponent } from './footer-about-us.component';

const routes: Routes = [
  {
    path: '',
    component: FooterAboutUsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FooterAboutUsRoutingModule { } 