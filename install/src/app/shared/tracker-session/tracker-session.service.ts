import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TrackerSession } from './tracker-session';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class TrackerSessionService {
    private url = environment.backend + "/api/tracker-session"; // Backend API endpoint for TrackerSession

    constructor(private http: HttpClient) { }

    // Get all TrackerSessions
    getItems(): Observable<TrackerSession[]> {
        return this.http.get<TrackerSession[]>(this.url);
    }

    // Get a single TrackerSession by ID
    getItem(id: number): Observable<TrackerSession> {
        const url = `${this.url}/${id}`;
        return this.http.get<TrackerSession>(url);
    }

    // Add a new TrackerSession
    addItem(item: TrackerSession): Observable<TrackerSession> {
        return this.http.post<TrackerSession>(this.url, item, httpOptions);
    }

    // Delete a TrackerSession by ID or object
    deleteItem(item: TrackerSession | number): Observable<TrackerSession> {
        const id = typeof item === 'number' ? item : item.id;
        const url = `${this.url}/${id}`;
        return this.http.delete<TrackerSession>(url, httpOptions);
    }

    // Update an existing TrackerSession
    updateItem(item: TrackerSession): Observable<any> {
        const url = `${this.url}/${item.id}`;
        return this.http.put<TrackerSession>(url, item, httpOptions);
    }

    // Update the endTime of an existing TrackerSession
    updateEndDate(idSession: number, endDate: Date): Observable<any> {
        const url = `${this.url}/${idSession}`;
        const updatePayload = [
            { op: 'replace', path: '/endTime', value: endDate.toISOString() }
        ];
        return this.http.patch<TrackerSession>(url, updatePayload, httpOptions);
    }


    // Get page views by session ID (additional route method)
    getPageViewsBySession(id: number): Observable<any[]> {
        const url = `${this.url}/session/${id}`;
        return this.http.get<any[]>(url, httpOptions);
    }

    // Get analytics data (additional route method)
    getAnalytics(): Observable<any> {
        const url = `${this.url}/analytics`;
        return this.http.get<any>(url, httpOptions);
    }

    // Search sessions (additional route method)
    searchSessions(query: string): Observable<TrackerSession[]> {
        const url = `${this.url}/search?query=${encodeURIComponent(query)}`;
        return this.http.get<TrackerSession[]>(url, httpOptions);
    }
}
