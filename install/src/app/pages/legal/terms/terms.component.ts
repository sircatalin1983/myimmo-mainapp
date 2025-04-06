import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TrackerService } from '../../../services/tracker.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-terms',
    templateUrl: './terms.component.html',
    styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {
    translationParams = {
        PARAM_COMPANY_NAME: environment.company.name,
        PARAM_COMPANY_J: environment.company.j,
        PARAM_COMPANY_CUI: environment.company.cui
    };

    constructor(
        private translate: TranslateService,
        private trackerService: TrackerService
    ) { }

    ngOnInit(): void {
        this.trackerService.trackPageView('Terms');
    }
} 