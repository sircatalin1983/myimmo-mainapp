import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { MainModule } from './pages/main/main.module';
import { Solution1Module } from './pages/solution1/solution1.module';

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
