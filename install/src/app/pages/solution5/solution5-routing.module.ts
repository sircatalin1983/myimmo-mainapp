import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Solution5Component } from './solution5.component';

const routes: Routes = [
  {
    path: '',
    component: Solution5Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Solution5RoutingModule {
}
