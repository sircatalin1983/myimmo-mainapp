import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Solution4Component } from './solution4.component';

const routes: Routes = [
  {
    path: '',
    component: Solution4Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Solution4RoutingModule {
}
