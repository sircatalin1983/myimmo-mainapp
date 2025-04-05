import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TrackerService } from '../../../services/tracker.service';

@Component({
    selector: 'app-privacy',
    templateUrl: './privacy.component.html',
    styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {
    constructor(
        private translate: TranslateService,
        private trackerService: TrackerService
    ) { }

    ngOnInit(): void {
        this.trackerService.trackPageView('Privacy Policy');
    }
} 