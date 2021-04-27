import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyImmoHelpComponent } from './myimmo-help.component';

const routes: Routes = [
  {
    path: '',
    component: MyImmoHelpComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyImmoHelpRoutingModule {
}
