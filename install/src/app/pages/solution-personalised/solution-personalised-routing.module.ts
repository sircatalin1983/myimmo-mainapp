import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SolutionPersonalisedComponent } from './solution-personalised.component';

const routes: Routes = [
  {
    path: '',
    component: SolutionPersonalisedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Solution3RoutingModule {
}
