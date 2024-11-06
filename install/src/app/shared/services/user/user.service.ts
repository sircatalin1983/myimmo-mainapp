import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

import { User } from './user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = environment.backend + '/api/users';

  constructor(private http: HttpClient) { }

  getItems(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  getItem(id: number): Observable<User> {
    const url = `${this.url}/${id}`;
    return this.http.get<User>(url);
  }

  getItemByUsernameOrEmail(identificator: string): Observable<User> {
    const url = `${this.url}/${identificator}/userdata`;
    return this.http.get<User>(url);
  }

  getAuthenticatedUser(identificator: string, password: string): Observable<User> {
    const url = `${this.url}/${identificator}/authenticate`;
    return this.http.get<User>(url);
  }

  getOriginalItemsByIdOrganisation(idOrganisation: number): Observable<User[]> {
    return this.http.get<User[]>(this.url + '/' + idOrganisation + '/original/byIdOrganisation', {
      headers: new HttpHeaders({ 'authorization': 'Bearer ' + localStorage.getItem('id_token') })
    });
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url, {
      headers: new HttpHeaders({ 'authorization': 'Bearer ' + localStorage.getItem('id_token') })
    });
  }

  checkIfUsernameExists(userEmail: string) {
    return of(false);
  }

  getUser(id: number): Observable<User> {
    const url = `${this.url}/${id}`;
    return this.http.get<User>(url);
  }

  addUser(item: User): Observable<User> {
    return this.http.post<User>(this.url, item, httpOptions);
  }

  deleteUser(item: User | number): Observable<User> {
    const id = typeof item === 'number' ? item : item.id;
    const url = `${this.url}/${id}`;

    return this.http.delete<User>(url, httpOptions);
  }

  updateUser(item: User): Observable<any> {
    const url = `${this.url}/${item.id}`;
    return this.http.put<User>(url, item, httpOptions);
  }
}

