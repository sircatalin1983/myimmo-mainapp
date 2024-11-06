import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogSearchComponent } from './blog-search.component';

const routes: Routes = [
  {
    path: '',
    component: BlogSearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogSearchRoutingModule {
}
