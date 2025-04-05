import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { TrackerService } from '../../shared/util/tracker.service';

@Component({
    selector: 'app-sitemap',
    templateUrl: './sitemap.component.html',
    styleUrls: ['./sitemap.component.scss']
})
export class SitemapComponent implements OnInit {
    constructor(
        private snackBar: MatSnackBar,
        private translate: TranslateService,
        private trackerService: TrackerService
    ) { }

    ngOnInit(): void {
        this.trackerService.trackPageView('Sitemap');
    }
} 