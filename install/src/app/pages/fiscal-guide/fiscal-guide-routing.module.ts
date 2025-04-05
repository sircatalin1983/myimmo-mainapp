import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FiscalGuideComponent } from './fiscal-guide.component';

const routes: Routes = [
  {
    path: '',
    component: FiscalGuideComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiscalGuideRoutingModule {
}
