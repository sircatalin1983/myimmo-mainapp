import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterBlogComponent } from './footer-blog.component';

const routes: Routes = [
    {
        path: '',
        component: FooterBlogComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FooterBlogRoutingModule { } 