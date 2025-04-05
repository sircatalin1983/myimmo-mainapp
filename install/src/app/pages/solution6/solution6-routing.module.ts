import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Solution6Component } from './solution6.component';

const routes: Routes = [
  {
    path: '',
    component: Solution6Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Solution6RoutingModule {
}
