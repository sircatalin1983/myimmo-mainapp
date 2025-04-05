import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DocumentsModule } from './pages/documents/documents.module';
import { CalculatorsModule } from './pages/calculators/calculators.module';
import { MainModule } from './pages/main/main.module';
import { PricingModule } from './pages/pricing/pricing.module';
import { SolutionPersonalisedModule } from './pages/solution-personalised/solution-personalised.module';
import { Solution1Module } from './pages/solution1/solution1.module';
import { Solution2Module } from './pages/solution2/solution2.module';
import { Solution3Module } from './pages/solution3/solution3.module';
import { MyImmoHelpModule } from './pages/myimmo-help/myimmo-help.module';
import { Calculator1Module } from './pages/calculator1/calculator1.module';
import { Calculator2Module } from './pages/calculator2/calculator2.module';
import { Calculator3Module } from './pages/calculator3/calculator3.module';
import { BlogLayoutComponent } from './blog-layout/blog-layout.component';
import { Solution4Module } from './pages/solution4/solution4.module';
import { Solution5Module } from './pages/solution5/solution5.module';
import { Solution6Module } from './pages/solution6/solution6.module';
import { FiscalGuideModule } from './pages/fiscal-guide/fiscal-guide.module';
import { ManagementToolModule } from './pages/management-tool/management-tool.module';
import { TodoModule } from './pages/todo/todo.module';

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
    path: 'solution4',
    component: LayoutComponent,
    loadChildren: () => Solution4Module
  },
  {
    path: 'solution5',
    component: LayoutComponent,
    loadChildren: () => Solution5Module
  },
  {
    path: 'solution6',
    component: LayoutComponent,
    loadChildren: () => Solution6Module
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
  {
    path: 'blog-list',
    component: BlogLayoutComponent,
    loadChildren: () => import('./../app/pages/blog-list/blog-list.module').then(m => m.BlogListModule)
  },
  {
    path: 'blog-post',
    component: BlogLayoutComponent,
    loadChildren: () => import('./../app/pages/blog-post/blog-post.module').then(m => m.BlogPostModule)
  },
  {
    path: 'blog-contact',
    component: BlogLayoutComponent,
    loadChildren: () => import('./../app/pages/blog-contact/blog-contact.module').then(m => m.BlogContactModule)
  },
  {
    path: 'blog-search/:id',
    component: BlogLayoutComponent,
    loadChildren: () => import('./../app/pages/blog-search/blog-search.module').then(m => m.BlogSearchModule)
  },
  // {
  //   path: 'blog-contact',
  //   component: BlogContactComponent,
  // },
  // {
  //   path: 'blog-search',
  //   component: BlogSearchComponent,
  // },

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
    path: 'calculator1',
    component: LayoutComponent,
    loadChildren: () => Calculator1Module
  },
  {
    path: 'calculator2',
    component: LayoutComponent,
    loadChildren: () => Calculator2Module
  },
  {
    path: 'calculator3',
    component: LayoutComponent,
    loadChildren: () => Calculator3Module
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
  {
    path: 'fiscal-guide',
    component: LayoutComponent,
    loadChildren: () => FiscalGuideModule
  },
  {
    path: 'management-tool',
    component: LayoutComponent,
    loadChildren: () => ManagementToolModule
  },
  {
    path: 'todo',
    component: LayoutComponent,
    loadChildren: () => TodoModule
  },
  {
    path: 'about-us',
    component: LayoutComponent,
    loadChildren: () => import('./pages/footer-about-us/footer-about-us.module').then(m => m.FooterAboutUsModule)
  },
  {
    path: 'careers',
    component: LayoutComponent,
    loadChildren: () => import('./pages/footer-careers/footer-careers.module').then(m => m.FooterCareersModule)
  },
  {
    path: 'blog',
    component: LayoutComponent,
    loadChildren: () => import('./pages/footer-blog/footer-blog.module').then(m => m.FooterBlogModule)
  },
  {
    path: 'press',
    component: LayoutComponent,
    loadChildren: () => import('./pages/footer-press/footer-press.module').then(m => m.FooterPressModule)
  },
  {
    path: 'collaboration',
    component: LayoutComponent,
    loadChildren: () => import('./pages/footer-collaboration/footer-collaboration.module').then(m => m.FooterCollaborationModule)
  },
  {
    path: 'contact',
    component: LayoutComponent,
    loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'legal/privacy',
    component: LayoutComponent,
    loadChildren: () => import('./pages/legal/privacy/privacy.module').then(m => m.PrivacyModule)
  },
  {
    path: 'legal/privacy-policy',
    component: LayoutComponent,
    loadChildren: () => import('./pages/legal/privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyModule)
  },
  {
    path: 'legal/cookie-preferences',
    component: LayoutComponent,
    loadChildren: () => import('./pages/legal/cookie-preferences/cookie-preferences.module').then(m => m.CookiePreferencesModule)
  },
  {
    path: 'legal/terms',
    component: LayoutComponent,
    loadChildren: () => import('./pages/legal/terms/terms.module').then(m => m.TermsModule)
  },
  {
    path: 'legal/gdpr',
    component: LayoutComponent,
    loadChildren: () => import('./pages/legal/gdpr/gdpr.module').then(m => m.GdprModule)
  },
  {
    path: 'sitemap',
    component: LayoutComponent,
    loadChildren: () => import('./pages/sitemap/sitemap.module').then(m => m.SitemapModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    //useHash: true
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {

}

