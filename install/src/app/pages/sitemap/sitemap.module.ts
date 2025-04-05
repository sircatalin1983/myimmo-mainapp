import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SitemapRoutingModule } from './sitemap-routing.module';
import { SitemapComponent } from './sitemap.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [SitemapComponent],
    imports: [
        CommonModule,
        SitemapRoutingModule,
        MatSnackBarModule,
        TranslateModule
    ]
})
export class SitemapModule { } 