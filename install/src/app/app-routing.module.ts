import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DocumentsModule } from './pages/documents/documents.module';
import { CalculatorsModule } from './pages/calculators/calculators.module';
import { MainModule } from './pages/main/main.module';
import { PricingModule } from './pages/pricing/pricing.module';
import { ResourceModule } from './pages/_resources/resource.module';
import { SolutionPersonalisedModule } from './pages/solution-personalised/solution-personalised.module';
import { Solution1Module } from './pages/solution1/solution1.module';
import { Solution2Module } from './pages/solution2/solution2.module';
import { Solution3Module } from './pages/solution3/solution3.module';
import { MyImmoHelpModule } from './pages/myimmo-help/myimmo-help.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: LayoutComponent,
    loadChildren: () => MainModule
  },
  {
    path: 'solution1',
    component: LayoutComponent,
    loadChildren: () => Solution1Module
  },
  {
    path: 'solution2',
    component: LayoutComponent,
    loadChildren: () => Solution2Module
  },
  {
    path: 'solution3',
    component: LayoutComponent,
    loadChildren: () => Solution3Module
  },
  {
    path: 'pricing',
    component: LayoutComponent,
    loadChildren: () => PricingModule
  },
  {
    path: 'solution-personalised',
    component: LayoutComponent,
    loadChildren: () => SolutionPersonalisedModule
  },
  // {
  //   path: 'resource',
  //   component: LayoutComponent,
  //   loadChildren: () => ResourceModule
  // },
  {
    path: 'calculators',
    component: LayoutComponent,
    loadChildren: () => CalculatorsModule
  },
  {
    path: 'documents',
    component: LayoutComponent,
    loadChildren: () => DocumentsModule
  },
  {
    path: 'help',
    component: LayoutComponent,
    loadChildren: () => MyImmoHelpModule
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
