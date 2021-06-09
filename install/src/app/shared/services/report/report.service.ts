import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ReportTypeEnum } from '../../util/reports';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private url = environment.backendImmoReport + "/reports";

  constructor(
    private http: HttpClient) { }

  getPDFFile(reportType, JSONRequest): Observable<Object> {
    if (reportType == ReportTypeEnum.ReportType_Inventory) return this.http.post<Object>(this.url + '/inventory', JSONRequest, httpOptions);
    if (reportType == ReportTypeEnum.ReportType_RentingContract) return this.http.post<Object>(this.url + '/rental-contract', JSONRequest, httpOptions);
    if (reportType == ReportTypeEnum.ReportType_SubRentingContract) return this.http.post<Object>(this.url + '/subrental-contract', JSONRequest, httpOptions);
    if (reportType == ReportTypeEnum.ReportType_End_RentingContract) return this.http.post<Object>(this.url + '/end-rental-contract', JSONRequest, httpOptions);
    if (reportType == 4) return this.http.post<Object>(this.url + '/end-contract', JSONRequest, httpOptions);
    //if (reportType == 4) return this.http.post<Object>(this.url + '', JSONRequest, httpOptions);
    return null;
  }
}
