import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { ShipmentService } from '../service/shipment.service';
import { Shipment, Status } from '../models/interface/shipment.interface';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { ShipmentDetailsComponent } from './shipment-details/shipment-details.component';
import { updateShipmentDTO } from '../models/DTO/updateShipmentDTO.model';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ShipmentStatus } from '../models/enum/status.enum';
import { StatusService } from '../service/status.service';


@Component({
  selector: 'app-shipment',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule, ShipmentDetailsComponent, FormsModule],
  templateUrl: './shipment.component.html',
  styleUrl: './shipment.component.scss'
})
export class ShipmentComponent implements OnInit {
  @ViewChild('detailModal') detailModal!: ShipmentDetailsComponent;
  private listUpdatedSubs!: Subscription;

  shipments: Shipment[] = [];
  totalCount: number = 0;
  statusList: Status[] = [];

  pageNo: number = 1;
  pageSize: number = 10;
  statusId?: number;
  descriptionFilter: string = '';

  isStatusFilterOpen = false;
  isDescriptionFilterOpen = false;

  ShipmentStatus = ShipmentStatus;

  constructor(
    private shipmentService: ShipmentService,
    private statusService: StatusService
  ){}

  ngOnInit(): void {
    this.getShipments();
    this.getStatus()

    //To update list when new shipment is created
    this.listUpdatedSubs = this.shipmentService.shipmentUpdated$.subscribe(() => {
      this.getShipments();
    });
  }

  getShipments(pageNo: number = this.pageNo, pageSize: number = this.pageSize){
    this.pageNo = pageNo == 0 ? 1 : pageNo;
    this.shipmentService.getShipments(pageNo, pageSize, this.statusId, this.descriptionFilter).subscribe({
      next: (result)=>{
        this.shipments = result.data;
        this.totalCount = result.totalCount;

        const totalPages = Math.ceil(this.totalCount / this.pageSize);

        // If the current page is greater than the total pages, move to the last page
        if (this.pageNo > totalPages) {
          this.pageNo = totalPages;
          this.getShipments()
        }
      } 
    })
  }

  getStatus(){
    this.statusService.getStatus().subscribe({
      next: (result) =>{
        this.statusList= result;
      },
      error: (error) =>{
        console.error(error);
      }
    })
  }

  searchByStatus(statusId?: number){
    this.statusId = statusId;
    this.getShipments(this.pageNo, this.pageSize);
  }

  searchByDescription(){
    this.getShipments(this.pageNo, this.pageSize);
  }

  resetFilters(){
    this.statusId = undefined;
    this.descriptionFilter = '';
    this.pageNo = 1;
    this.pageSize = 10;
    this.getShipments();
  }

  openPopUp(){
    this.detailModal.open();
  }

  viewShipmentDetail(shipment: Shipment){
    this.openPopUp()
    this.detailModal.populatFields(shipment)    
    
  }

  openConfirmPopUp(shipment: Shipment){
    const currenStatus = shipment.statusId;

    let updateStatus = new updateShipmentDTO;
    let question;

    switch (currenStatus){
      case ShipmentStatus.Ready:
        updateStatus.statusId = ShipmentStatus.Checkout;
        question = 'Do you want to checkout the shipment?'
        break;
      case ShipmentStatus.Checkout: 
        updateStatus.statusId = ShipmentStatus.Delivered;
        question = 'Is the shipment delivered?'
        break;
      default:
        break;
    }

    Swal.fire({
      title: question,
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        this.updateStatus(shipment.id, updateStatus)
      } 
    });

    
  }

  updateStatus(id: string, status: updateShipmentDTO){
    this.shipmentService.updateShipmentStatus(id, status).subscribe({
      next: (result) =>{
        this.getShipments(this.pageNo, this.pageSize)
        Swal.fire({
          icon: 'success',
          title: 'Shipment Updated',
          text: 'Your shipment is ' + result.status.name,
          timer: 1800,
          showConfirmButton: false
        });
      },
      error: (error) =>{
        console.error(error);
      }
    })
  }

  deletePopUp(id: string){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteShipment(id);
      }
    });
  }

  deleteShipment(id: string){
    this.shipmentService.deleteShipment(id).subscribe({
      next: (result) =>{
        if(result){
          Swal.fire({
            title: "Deleted!",
            text: "Your shipment has been deleted.",
            icon: "success",
            timer: 1800,
          // showConfirmButton: false
          });
          this.getShipments(this.pageNo, this.pageSize)
        
        }
      }
    })
  }

  toggleDropdown() {
    this.isDescriptionFilterOpen = false;
    this.isStatusFilterOpen = !this.isStatusFilterOpen;
    
  }

  toggleDescriptionDropdown() {
    this.isStatusFilterOpen = false;
    this.isDescriptionFilterOpen = !this.isDescriptionFilterOpen;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown-menu') && !target.closest('button')) {
      this.isStatusFilterOpen = false;
      this.isDescriptionFilterOpen = false;
    }
  }

}
