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
        let previousTimestamp: number | null = null;

        this.startTime = new Date().getTime();
        this.isLoading = true;

        let isFirstLoad = true; // Flag to track if this is the first load
        this.router.events
            .pipe(
                filter((event: Event) => event instanceof NavigationEnd),
                startWith(new NavigationEnd(0, this.router.url, this.router.url)) // Simulate the initial page load event
            )
            .subscribe((event: NavigationEnd) => {
                if (isFirstLoad) {
                    isFirstLoad = false; // Reset the flag after handling the first load
                } 
            });

        if (isFirstLoad) {
            this.endSession();    
            this.startSession();
        }

        this.router.events
            .pipe(
                filter((event: Event) => event instanceof NavigationEnd),
                startWith(new NavigationEnd(0, this.router.url, this.router.url)) // Manually add the initial page load event
            )
            .subscribe((event: NavigationEnd) => {

                console.log('trackPageViews:')

                const sessionIp = localStorage.getItem('session_ip');
                const sessionId = Number.parseInt(localStorage.getItem('session_id'), 10);
                const referrer = document.referrer; // Referrer URL
                const timestamp = new Date(); // Current timestamp
                const title = document.title; // Page title
                let duration: number | undefined = undefined;

                // Calculate duration on the previous page
                if (previousTimestamp) {
                    const now = timestamp.getTime();
                    duration = (now - previousTimestamp) / 1000; // Duration in seconds
                }

                // Update the previous timestamp for the next navigation event
                previousTimestamp = timestamp.getTime();

                const pageView: TrackerPageView = {
                    id: 0,
                    idTrackerSession: sessionId,
                    pageUrl: event.urlAfterRedirects,
                    referrer: event.url,
                    referrerUrl: event.urlAfterRedirects,
                    userAgent: navigator.userAgent,
                    ipAddress: sessionIp,
                    timestamp: timestamp,
                    title: title,
                    duration: duration
                };

                console.log('pageView:', pageView)

                this.startTime = new Date().getTime();
                this.isLoading = true;

                Helpers.getObservable([])
                    .pipe(
                        switchMap(() => this.trackerPageViewService.addItem(pageView)),
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
            });
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
