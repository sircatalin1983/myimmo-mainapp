import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { TrackerService } from '../../../shared/util/tracker.service';

@Component({
    selector: 'app-cookie-preferences',
    templateUrl: './cookie-preferences.component.html',
    styleUrls: ['./cookie-preferences.component.scss']
})
export class CookiePreferencesComponent implements OnInit {
    constructor(
        private snackBar: MatSnackBar,
        private translate: TranslateService,
        private trackerService: TrackerService
    ) { }

    ngOnInit(): void {
        this.trackerService.trackPageView('Cookie Preferences');
    }
} 