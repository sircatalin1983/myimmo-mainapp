import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TrackerService } from '../../../services/tracker.service';

@Component({
    selector: 'app-gdpr',
    templateUrl: './gdpr.component.html',
    styleUrls: ['./gdpr.component.scss']
})
export class GdprComponent implements OnInit {
    constructor(
        private translate: TranslateService,
        private trackerService: TrackerService
    ) { }

    ngOnInit(): void {
        this.trackerService.trackPageView('GDPR Information');
    }
} 