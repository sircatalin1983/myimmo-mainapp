import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieConsentService } from '../../services/cookie-consent.service';

@Component({
    selector: 'app-cookie-banner',
    templateUrl: './cookie-banner.component.html',
    styleUrls: ['./cookie-banner.component.scss']
})
export class CookieBannerComponent implements OnInit {
    showBanner = false;

    constructor(
        private cookieConsentService: CookieConsentService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.showBanner = !this.cookieConsentService.hasConsent();
    }

    acceptAll(): void {
        this.cookieConsentService.acceptAll();
        this.showBanner = false;
    }

    rejectAll(): void {
        this.cookieConsentService.rejectAll();
        this.showBanner = false;
    }

    customize(): void {
        this.router.navigate(['/legal/cookie-preferences']);
        this.showBanner = false;
    }
} 