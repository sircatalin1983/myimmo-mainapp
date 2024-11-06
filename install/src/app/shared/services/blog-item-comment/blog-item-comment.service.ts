import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { BlogItemComment } from './blog-item-comment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BlogItemCommentService {
  private url = environment.backend + "/api/blogitemcomments";

  constructor(private http: HttpClient) {}

  // Get all comments
  getComments(): Observable<BlogItemComment[]> {
    return this.http.get<BlogItemComment[]>(this.url);
  }

  // Get a specific comment by ID
  getComment(id: number): Observable<BlogItemComment> {
    return this.http.get<BlogItemComment>(`${this.url}/${id}`);
  }

  // Add a new comment
  addComment(comment: BlogItemComment): Observable<BlogItemComment> {
    return this.http.post<BlogItemComment>(this.url, comment, httpOptions);
  }

  // Update an existing comment
  updateComment(id: number, comment: BlogItemComment): Observable<void> {
    return this.http.put<void>(`${this.url}/${id}`, comment, httpOptions);
  }

  // Get comments for a specific blog item
  getCommentsByBlogItem(idBlogItem: number): Observable<BlogItemComment[]> {
    return this.http.get<BlogItemComment[]>(`${this.url}/blog/${idBlogItem}`);
  }

  // Get the latest three comments
  getLatestComments(): Observable<BlogItemComment[]> {
    return this.http.get<BlogItemComment[]>(`${this.url}/latest`);
  }

  // Increment likes for a specific comment
  incrementLikes(id: number): Observable<void> {
    return this.http.patch<void>(`${this.url}/${id}/like`, {}, httpOptions);
  }

  // Increment dislikes for a specific comment
  incrementDislikes(id: number): Observable<void> {
    return this.http.patch<void>(`${this.url}/${id}/dislike`, {}, httpOptions);
  }

  // Toggle the active status of a comment
  toggleActive(id: number): Observable<void> {
    return this.http.patch<void>(`${this.url}/${id}/toggle-active`, {}, httpOptions);
  }
}
