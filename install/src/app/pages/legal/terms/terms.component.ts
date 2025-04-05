import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TrackerService } from '../../../services/tracker.service';

@Component({
    selector: 'app-terms',
    templateUrl: './terms.component.html',
    styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {
    constructor(
        private translate: TranslateService,
        private trackerService: TrackerService
    ) { }

    ngOnInit(): void {
        this.trackerService.trackPageView('Terms');
    }
} 