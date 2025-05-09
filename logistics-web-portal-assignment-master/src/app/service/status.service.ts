import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Status } from '../models/interface/shipment.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

    getStatus(pageNo: number = 1, pageSize: number = 10): Observable<Status[]>{
      return this.http.get<Status[]>(`${this.apiUrl}/status`)
    }
}
