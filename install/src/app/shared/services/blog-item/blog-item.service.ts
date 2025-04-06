import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogItem } from './blog-item';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BlogItemService {
    private apiUrl = `${environment.backend}/api/blogitems`;

    constructor(private http: HttpClient) { }

    getAll(): Observable<BlogItem[]> {
        return this.http.get<BlogItem[]>(this.apiUrl);
    }

    getById(id: number): Observable<BlogItem> {
        return this.http.get<BlogItem>(`${this.apiUrl}/${id}`);
    }

    getBySlug(slug: string): Observable<BlogItem> {
        return this.http.get<BlogItem>(`${this.apiUrl}/slug/${slug}`);
    }

    getByCategory(category: string): Observable<BlogItem[]> {
        return this.http.get<BlogItem[]>(`${this.apiUrl}/category/${category}`);
    }
} 