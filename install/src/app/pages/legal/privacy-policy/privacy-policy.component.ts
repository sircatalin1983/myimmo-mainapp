import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { TrackerService } from '../../../shared/util/tracker.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-privacy-policy',
    templateUrl: './privacy-policy.component.html',
    styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {
    translationParams = {
        PARAM_COMPANY_NAME: environment.company.name,
        PARAM_COMPANY_J: environment.company.j,
        PARAM_COMPANY_CUI: environment.company.cui,
        PARAM_COMPANY_ADDRESS: environment.company.address.street + " " + environment.company.address.no,
        PARAM_COMPANY_TELEPHONE: environment.company.contactInfo.contactTelephone,
        PARAM_COMPANY_EMAIL: environment.company.contactInfo.contactEmail,
    };
        
    constructor(
        private snackBar: MatSnackBar,
        private translate: TranslateService,
        private trackerService: TrackerService
    ) { }

    ngOnInit(): void {
        this.trackerService.trackPageView('Privacy Policy');
    }
} 