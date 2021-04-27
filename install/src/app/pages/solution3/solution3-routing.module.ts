import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Solution3Component } from './solution3.component';

const routes: Routes = [
  {
    path: '',
    component: Solution3Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Solution3RoutingModule {
}
