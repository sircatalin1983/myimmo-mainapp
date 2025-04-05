import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { TrackerService } from '../../services/tracker.service';

@Component({
    selector: 'app-footer-collaboration',
    templateUrl: './footer-collaboration.component.html',
    styleUrls: ['./footer-collaboration.component.scss']
})
export class FooterCollaborationComponent implements OnInit {
    constructor(
        private snackBar: MatSnackBar,
        private translate: TranslateService,
        private trackerService: TrackerService
    ) { }

    ngOnInit(): void {
        this.trackerService.trackPageView('Footer Collaboration');
    }
} 