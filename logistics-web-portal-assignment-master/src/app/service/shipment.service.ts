import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry, Subject } from 'rxjs';
import { Shipment } from '../models/interface/shipment.interface';
import { createShipmentDTO } from '../models/DTO/createShipmentDTO.model';
import { updateShipmentDTO } from '../models/DTO/updateShipmentDTO.model';

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {

  private apiUrl = 'http://localhost:3000';

  private shipmentUpdatedSubject = new Subject<void>(); 
  shipmentUpdated$: Observable<void> = this.shipmentUpdatedSubject.asObservable();


  constructor(private http: HttpClient) { }

  emitShipmentUpdated() {
    this.shipmentUpdatedSubject.next();
  }

  getShipments(pageNo: number = 1, pageSize: number = 10, statusId?: number, description?: string): Observable<{data: Shipment[], totalCount: number }>{
    return this.http.get<{data: Shipment[], totalCount: number }>(`${this.apiUrl}/shipment?pageNo=${pageNo}&pageSize=${pageSize}&statusId=${statusId}&description=${description}`)
  }

  createShipment(dto: createShipmentDTO){
    return this.http.post<Shipment>(`${this.apiUrl}/shipment`, dto)
  }

  updateShipmentStatus(id: string, updateStatus: updateShipmentDTO){
    return this.http.put<Shipment>(`${this.apiUrl}/shipment/${id}`, updateStatus);
  }

  deleteShipment(id: string){
    return this.http.delete<Shipment>(`${this.apiUrl}/shipment/${id}`);
  }

}
