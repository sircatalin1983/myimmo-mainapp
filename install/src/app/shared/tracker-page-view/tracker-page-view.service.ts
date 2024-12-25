import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TrackerPageView } from './tracker-page-view';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TrackerPageViewService {
  private url = environment.backend + "/api/tracker-page-view"; // Backend API endpoint for TrackerPageView

  constructor(private http: HttpClient) { }

  // Get all TrackerPageViews
  getItems(): Observable<TrackerPageView[]> {
    return this.http.get<TrackerPageView[]>(this.url);
  }

  // Get a single TrackerPageView by ID
  getItem(id: number): Observable<TrackerPageView> {
    const url = `${this.url}/${id}`;
    return this.http.get<TrackerPageView>(url);
  }

  // Add a new TrackerPageView
  addItem(item: TrackerPageView): Observable<TrackerPageView> {
    return this.http.post<TrackerPageView>(this.url, item, httpOptions);
  }

  // Delete a TrackerPageView by ID or object
  deleteItem(item: TrackerPageView | number): Observable<TrackerPageView> {
    const id = typeof item === 'number' ? item : item.id;
    const url = `${this.url}/${id}`;
    return this.http.delete<TrackerPageView>(url, httpOptions);
  }

  // Update an existing TrackerPageView
  updateItem(item: TrackerPageView): Observable<any> {
    const url = `${this.url}/${item.id}`;
    return this.http.put<TrackerPageView>(url, item, httpOptions);
  }

  // Get events by session ID (additional route method)
  getEventsBySession(id: number): Observable<any[]> {
    const url = `${this.url}/session/${id}`;
    return this.http.get<any[]>(url, httpOptions);
  }
}
