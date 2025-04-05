import { Injectable } from '@angular/core';
import { catchError, finalize, switchMap, tap } from 'rxjs/operators';
import { TrackerSessionService } from '../tracker-session/tracker-session.service';
import { TrackerEventService } from '../tracker-event/tracker-event.service';
import { TrackerPageViewService } from '../tracker-page-view/tracker-page-view.service';
import { TrackerSession } from '../tracker-session/tracker-session';
import { TrackerEvent } from '../tracker-event/tracker-event';
import { TrackerPageView } from '../tracker-page-view/tracker-page-view';
import { Helpers } from './helpers';
import { Router, NavigationEnd, Event } from '@angular/router';
import { filter, startWith } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class TrackerService {
    private sessionId: number | null = null;

    isLoading: boolean;
    private startTime = new Date().getTime();

    constructor(
        private trackerSessionService: TrackerSessionService,
        private trackerEventService: TrackerEventService,
        private trackerPageViewService: TrackerPageViewService,
        private router: Router
    ) { }

    async startSession(idUser: string = null) {
        const ip = await Helpers.getPublicIpAddress();
        const ipData = ip ? null : await Helpers.getIpDetails(ip);

        localStorage.setItem('session_ip', ip);

        const session = new TrackerSession(
            0,
            idUser,
            new Date(),
            undefined,
            ip,
            JSON.stringify(ipData),
            navigator.userAgent
        );

        this.startTime = new Date().getTime();
        this.isLoading = true;

        Helpers.getObservable([])
            .pipe(
                switchMap(() => this.trackerSessionService.addItem(session)),
                tap((session: any) => {
                    this.sessionId = session.id;
                    localStorage.setItem('session_id', session.id);
                    localStorage.setItem('session', JSON.stringify(session));
                }),
                catchError(
                    error => {
                        throw error;
                    }
                ),
                finalize(() => {
                    this.isLoading = false;
                }),
            )
            .subscribe(
                results => {
                    Helpers.consoleInfo(this.startTime, this.constructor.name, Helpers.getMethodName(), results)
                },
                error => {
                    Helpers.consoleError(this.startTime, this.constructor.name, Helpers.getMethodName(), error)
                }
            );
    }

    logEvent(eventName: string, metadata: any): void {
        const sessionIp = localStorage.getItem('session_ip');
        const sessionId = Number.parseInt(localStorage.getItem('session_id'));

        const event: TrackerEvent = {
            id: 0,
            idTrackerSession: sessionId,
            eventType: eventName,
            eventData: metadata,
            timestamp: new Date(),
            ipAddress: sessionIp,
            userAgent: navigator.userAgent
        };

        this.startTime = new Date().getTime();
        this.isLoading = true;

        Helpers.getObservable([])
            .pipe(
                switchMap(() => this.trackerEventService.addItem(event)),
                catchError(
                    error => {
                        throw error;
                    }
                ),
                finalize(() => {
                    this.isLoading = false;
                }),
            )
            .subscribe(
                results => {
                    Helpers.consoleInfo(this.startTime, this.constructor.name, Helpers.getMethodName(), results)
                },
                error => {
                    Helpers.consoleError(this.startTime, this.constructor.name, Helpers.getMethodName(), error)
                }
            );
    }

    trackPageViews(): void {
        // Implement your page view tracking logic here
        console.log('Page view tracked');
    }

    trackPageView(pageName: string): void {
        // Implement your specific page tracking logic here
        console.log(`Page view tracked for: ${pageName}`);
    }

    endSession(): void {
        const session = JSON.parse(localStorage.getItem('session'));

        if (!session)
            return;

        this.startTime = new Date().getTime();
        this.isLoading = true;

        Helpers.getObservable([])
            .pipe(
                switchMap(() => this.trackerSessionService.updateEndDate(session.id, new Date())),
                catchError(
                    error => {
                        throw error;
                    }
                ),
                finalize(() => {
                    this.isLoading = false;

                    this.sessionId = null;

                    localStorage.setItem('session_ip', null);
                    localStorage.setItem('session_id', null);
                }),
            )
            .subscribe(
                results => {
                    Helpers.consoleInfo(this.startTime, this.constructor.name, Helpers.getMethodName(), results)
                },
                error => {
                    Helpers.consoleError(this.startTime, this.constructor.name, Helpers.getMethodName(), error)
                }
            );
    }
}
