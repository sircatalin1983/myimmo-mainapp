import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterSitemapComponent } from './footer-sitemap.component';

const routes: Routes = [
  {
    path: '',
    component: FooterSitemapComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FooterSitemapRoutingModule { } 