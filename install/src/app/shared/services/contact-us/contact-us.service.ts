import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { ContactUs } from './contact-us';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
  private url = environment.backend + "/api/contactus";

  constructor(private http: HttpClient) { }

  getItems(): Observable<ContactUs[]> {
    return this.http.get<ContactUs[]>(this.url);
  }

  getItem(id: number): Observable<ContactUs> {
    const url = `${this.url}/${id}`;
    return this.http.get<ContactUs>(url);
  }

  addItem(item: ContactUs): Observable<ContactUs> {
    return this.http.post<ContactUs>(this.url, item, httpOptions);
  }
}