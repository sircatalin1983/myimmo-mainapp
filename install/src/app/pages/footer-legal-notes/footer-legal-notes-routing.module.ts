import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterLegalNotesComponent } from './footer-legal-notes.component';

const routes: Routes = [
  {
    path: '',
    component: FooterLegalNotesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FooterLegalNotesRoutingModule { } 