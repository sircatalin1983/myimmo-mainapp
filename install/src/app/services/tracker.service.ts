import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrackerService {
  constructor() {}

  /**
   * Track a page view event
   * @param pageName The name of the page being viewed
   */
  trackPageView(pageName: string): void {
    // Here you would typically integrate with your analytics service
    // For example, Google Analytics, Mixpanel, etc.
    console.log(`Page viewed: ${pageName}`);
  }

  /**
   * Track a custom event
   * @param eventName The name of the event
   * @param properties Optional properties associated with the event
   */
  trackEvent(eventName: string, properties?: Record<string, any>): void {
    console.log(`Event tracked: ${eventName}`, properties);
  }
} 