import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogContactComponent } from './blog-contact.component';

const routes: Routes = [
  {
    path: '',
    component: BlogContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogContactRoutingModule {
}
