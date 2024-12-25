import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TrackerEvent } from './tracker-event';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TrackerEventService {
  private url = environment.backend + "/api/tracker-event"; // Backend API endpoint for TrackerEvent

  constructor(private http: HttpClient) { }

  // Get all TrackerEvents
  getItems(): Observable<TrackerEvent[]> {
    return this.http.get<TrackerEvent[]>(this.url);
  }

  // Get a single TrackerEvent by ID
  getItem(id: number): Observable<TrackerEvent> {
    const url = `${this.url}/${id}`;
    return this.http.get<TrackerEvent>(url);
  }

  // Add a new TrackerEvent
  addItem(item: TrackerEvent): Observable<TrackerEvent> {
    return this.http.post<TrackerEvent>(this.url, item, httpOptions);
  }

  // Delete a TrackerEvent by ID or object
  deleteItem(item: TrackerEvent | number): Observable<TrackerEvent> {
    const id = typeof item === 'number' ? item : item.id;
    const url = `${this.url}/${id}`;
    return this.http.delete<TrackerEvent>(url, httpOptions);
  }

  // Update an existing TrackerEvent
  updateItem(item: TrackerEvent): Observable<any> {
    const url = `${this.url}/${item.id}`;
    return this.http.put<TrackerEvent>(url, item, httpOptions);
  }

  // Get events by session ID (additional route method)
  getEventsBySession(id: number): Observable<TrackerEvent[]> {
    const url = `${this.url}/session/${id}`;
    return this.http.get<TrackerEvent[]>(url, httpOptions);
  }

  // Get analytics data (additional route method)
  getAnalytics(): Observable<any> {
    const url = `${this.url}/analytics`;
    return this.http.get<any>(url, httpOptions);
  }

  // Search events (additional route method)
  searchEvents(query: string): Observable<TrackerEvent[]> {
    const url = `${this.url}/search?query=${encodeURIComponent(query)}`;
    return this.http.get<TrackerEvent[]>(url, httpOptions);
  }
}
