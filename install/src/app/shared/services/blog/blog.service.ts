import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Blog } from './blog';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private url = environment.backend + "/api/blogitems";

  constructor(private http: HttpClient) { }
  
  getItems(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.url);
  }

  getLastThreeItems(): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${this.url}/all/latest`);
  }

  getItem(id: number): Observable<Blog> {
    const url = `${this.url}/${id}`;
    return this.http.get<Blog>(url);
  }

  addItem(item: Blog): Observable<Blog> {
    return this.http.post<Blog>(this.url, item, httpOptions);
  }

  // Get items by category ID
  getItemsByCategory(idCategory: number): Observable<Blog[]> {
    const url = `${this.url}/category/${idCategory}`;
    return this.http.get<Blog[]>(url);
  }

  // Get count of all blog items
  getCount(): Observable<number> {
    return this.http.get<number>(`${this.url}/all/count`);
  }

  // Increment views for a specific blog item
  incrementViews(id: number): Observable<void> {
    const url = `${this.url}/${id}/increment-views`;
    return this.http.patch<void>(url, {}, httpOptions);
  }

  // Toggle the active status of a blog item
  toggleActive(id: number): Observable<void> {
    const url = `${this.url}/${id}/toggle-active`;
    return this.http.patch<void>(url, {}, httpOptions);
  }

  // Update the likes count for a specific blog item reaction
  incrementLikes(id: number): Observable<void> {
    const url = `${this.url}/reaction/${id}/like`;
    return this.http.patch<void>(url, {}, httpOptions);
  }

  // Update the dislikes count for a specific blog item reaction
  incrementDislikes(id: number): Observable<void> {
    const url = `${this.url}/reaction/${id}/dislike`;
    return this.http.patch<void>(url, {}, httpOptions);
  }
}