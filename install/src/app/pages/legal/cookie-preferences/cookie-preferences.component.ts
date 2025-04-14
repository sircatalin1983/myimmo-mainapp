import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { TrackerService } from '../../../shared/util/tracker.service';
import { CookieConsentService, CookiePreferences } from '../../../shared/services/cookie-consent.service';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-cookie-preferences',
    templateUrl: './cookie-preferences.component.html',
    styleUrls: ['./cookie-preferences.component.scss']
})
export class CookiePreferencesComponent implements OnInit, OnDestroy {
    translationParams = {
        PARAM_COMPANY_NAME: environment.company.name,
        PARAM_COMPANY_J: environment.company.j,
        PARAM_COMPANY_CUI: environment.company.cui,
        PARAM_COMPANY_ADDRESS: environment.company.address.street + " " + environment.company.address.no,
        PARAM_COMPANY_TELEPHONE: environment.company.contactInfo.contactTelephone,
        PARAM_COMPANY_EMAIL: environment.company.contactInfo.contactEmail,
    };

    cookiePreferences: CookiePreferences = {
        analytics: false,
        marketing: false,
        preferences: false
    };

    isModalOpen = false;
    tempPreferences: CookiePreferences = {
        analytics: false,
        marketing: false,
        preferences: false
    };

    private subscription: Subscription;

    constructor(
        private snackBar: MatSnackBar,
        private translate: TranslateService,
        private trackerService: TrackerService,
        private cookieConsentService: CookieConsentService
    ) { }

    ngOnInit(): void {
        this.trackerService.trackPageView('Cookie Preferences');
        this.loadSavedPreferences();

        // Subscribe to changes from the service
        this.subscription = this.cookieConsentService.cookiePreferences$.subscribe(
            preferences => {
                if (preferences) {
                    this.cookiePreferences = { ...preferences };
                    this.tempPreferences = { ...preferences };
                }
            }
        );
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    private loadSavedPreferences(): void {
        const currentPreferences = this.cookieConsentService.getCurrentPreferences();
        if (currentPreferences) {
            this.cookiePreferences = { ...currentPreferences };
            this.tempPreferences = { ...currentPreferences };
        }
    }

    private savePreferences(preferences: CookiePreferences): void {
        this.cookieConsentService.savePreferences(preferences);
        this.showSuccessMessage('COOKIES.PREFERENCES_SAVED');
    }

    acceptAll(): void {
        this.cookieConsentService.acceptAll();
        this.showSuccessMessage('COOKIES.PREFERENCES_SAVED');
    }

    rejectAll(): void {
        this.cookieConsentService.rejectAll();
        this.showSuccessMessage('COOKIES.PREFERENCES_SAVED');
    }

    openCustomizeModal(): void {
        this.tempPreferences = { ...this.cookiePreferences };
        this.isModalOpen = true;
        document.body.classList.add('modal-open');
    }

    closeModal(): void {
        this.isModalOpen = false;
        document.body.classList.remove('modal-open');
    }

    saveAndCloseModal(): void {
        this.cookiePreferences = { ...this.tempPreferences };
        this.savePreferences(this.cookiePreferences);
        this.closeModal();
    }

    private showSuccessMessage(messageKey: string): void {
        this.translate.get(messageKey).subscribe((message: string) => {
            this.snackBar.open(message, 'OK', {
                duration: 3000,
                horizontalPosition: 'center',
                verticalPosition: 'bottom',
                panelClass: ['success-snackbar']
            });
        });
    }
} 