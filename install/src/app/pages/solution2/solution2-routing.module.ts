import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Solution2Component } from './solution2.component';

const routes: Routes = [
  {
    path: '',
    component: Solution2Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Solution2RoutingModule {
}
