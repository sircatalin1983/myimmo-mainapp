import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ManagementToolComponent } from './management-tool.component';

const routes: Routes = [
  {
    path: '',
    component: ManagementToolComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementToolRoutingModule {
}
