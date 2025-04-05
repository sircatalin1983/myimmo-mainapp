import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { TrackerService } from '../../shared/util/tracker.service';

@Component({
    selector: 'app-footer-careers',
    templateUrl: './footer-careers.component.html',
    styleUrls: ['./footer-careers.component.scss']
})
export class FooterCareersComponent implements OnInit {
    constructor(
        private snackBar: MatSnackBar,
        private translate: TranslateService,
        private trackerService: TrackerService
    ) { }

    ngOnInit(): void {
        this.trackerService.trackPageView('Footer Careers');
    }
} 