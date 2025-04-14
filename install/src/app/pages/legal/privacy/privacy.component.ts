import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TrackerService } from '../../../services/tracker.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-privacy',
    templateUrl: './privacy.component.html',
    styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {
    translationParams = {
        PARAM_COMPANY_NAME: environment.company.name,
        PARAM_COMPANY_J: environment.company.j,
        PARAM_COMPANY_CUI: environment.company.cui,
        PARAM_COMPANY_ADDRESS: environment.company.address.street + " " + environment.company.address.no,
        PARAM_COMPANY_TELEPHONE: environment.company.contactInfo.contactTelephone,
        PARAM_COMPANY_EMAIL: environment.company.contactInfo.contactEmail,
    };
        
    constructor(
        private translate: TranslateService,
        private trackerService: TrackerService
    ) { }

    ngOnInit(): void {
        this.trackerService.trackPageView('Privacy Policy');
    }
} 