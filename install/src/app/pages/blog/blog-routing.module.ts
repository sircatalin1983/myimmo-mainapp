import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from './blog.component';
import { BlogContactComponent } from './blog-contact/blog-contact.component';
import { BlogSearchComponent } from './blog-search/blog-search.component';
import { BlogPostComponent } from './blog-post/blog-post.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
  },
  {
    path: 'blog-contact',
    component: BlogContactComponent,
  },
  {
    path: 'blog-search',
    component: BlogSearchComponent,
  },
  {
    path: 'blog-post/:id',
    component: BlogPostComponent,
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {
}
