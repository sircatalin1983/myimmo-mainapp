import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface CookiePreferences {
    analytics: boolean;
    marketing: boolean;
    preferences: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class CookieConsentService {
    private readonly COOKIE_PREFERENCES_KEY = 'cookiePreferences';
    private readonly COOKIE_CONSENT_SHOWN_KEY = 'cookieConsentShown';
    
    private cookiePreferencesSubject = new BehaviorSubject<CookiePreferences | null>(null);
    cookiePreferences$ = this.cookiePreferencesSubject.asObservable();

    constructor() {
        this.loadSavedPreferences();
        window.addEventListener('storage', (e) => {
            if (e.key === this.COOKIE_PREFERENCES_KEY) {
                this.loadSavedPreferences();
            }
        });
    }

    private loadSavedPreferences(): void {
        const savedPreferences = localStorage.getItem(this.COOKIE_PREFERENCES_KEY);
        if (savedPreferences) {
            this.cookiePreferencesSubject.next(JSON.parse(savedPreferences));
        }
    }

    savePreferences(preferences: CookiePreferences): void {
        localStorage.setItem(this.COOKIE_PREFERENCES_KEY, JSON.stringify(preferences));
        localStorage.setItem(this.COOKIE_CONSENT_SHOWN_KEY, 'true');
        this.cookiePreferencesSubject.next(preferences);
        
        // Emit a custom event to notify other tabs/windows
        const event = new StorageEvent('storage', {
            key: this.COOKIE_PREFERENCES_KEY,
            newValue: JSON.stringify(preferences),
            storageArea: localStorage
        });

        window.dispatchEvent(event);
    }

    hasConsent(): boolean {
        return false;
        localStorage.getItem(this.COOKIE_CONSENT_SHOWN_KEY) === 'true';
    }

    acceptAll(): void {
        const preferences: CookiePreferences = {
            analytics: true,
            marketing: true,
            preferences: true
        };
        this.savePreferences(preferences);
    }

    rejectAll(): void {
        const preferences: CookiePreferences = {
            analytics: false,
            marketing: false,
            preferences: false
        };
        this.savePreferences(preferences);
    }

    getCurrentPreferences(): CookiePreferences | null {
        return this.cookiePreferencesSubject.value;
    }

    resetConsent(): void {
        localStorage.removeItem(this.COOKIE_PREFERENCES_KEY);
        localStorage.removeItem(this.COOKIE_CONSENT_SHOWN_KEY);
        this.cookiePreferencesSubject.next(null);
    }
} 