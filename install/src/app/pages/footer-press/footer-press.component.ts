import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { TrackerService } from '../../services/tracker.service';

@Component({
    selector: 'app-footer-press',
    templateUrl: './footer-press.component.html',
    styleUrls: ['./footer-press.component.scss']
})
export class FooterPressComponent implements OnInit {
    constructor(
        private snackBar: MatSnackBar,
        private translate: TranslateService,
        private trackerService: TrackerService
    ) { }

    ngOnInit(): void {
        this.trackerService.trackPageView('Footer Press');
    }
} 