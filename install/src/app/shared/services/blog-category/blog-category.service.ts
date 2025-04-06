import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogCategory } from './blog-category';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BlogCategoryService {
    private apiUrl = `${environment.backend}/blogcategories`;

    constructor(private http: HttpClient) { }

    getAll(): Observable<BlogCategory[]> {
        return this.http.get<BlogCategory[]>(this.apiUrl);
    }

    getById(id: number): Observable<BlogCategory> {
        return this.http.get<BlogCategory>(`${this.apiUrl}/${id}`);
    }

    getBySlug(slug: string): Observable<BlogCategory> {
        return this.http.get<BlogCategory>(`${this.apiUrl}/slug/${slug}`);
    }
} 