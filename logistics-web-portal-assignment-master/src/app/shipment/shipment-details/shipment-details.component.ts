import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { ShipmentService } from '../../service/shipment.service';
import { createShipmentDTO } from '../../models/DTO/createShipmentDTO.model';
import Swal from 'sweetalert2';
import { Shipment } from '../../models/interface/shipment.interface';
import { ShipmentStatus } from '../../models/enum/status.enum';


declare var bootstrap: any; 

@Component({
  selector: 'app-shipment-details',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './shipment-details.component.html',
  styleUrl: './shipment-details.component.scss'
})
export class ShipmentDetailsComponent {
  @ViewChild('shipmentModal') modalRef!: ElementRef;
  private modalInstance: any;

  createForm: FormGroup;

  shipmentDetail!: Shipment;
  viewshipment: boolean = false;

  ShipmentStatus = ShipmentStatus;


  constructor(
    private fb: FormBuilder,
    private shipmentService: ShipmentService,
  ){
    this.createForm = this.fb.group({
      description: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\+?\d{10,15}$/)]],
      
    })
  }


  open() {
    this.resetForm();
    const modalEl = this.modalRef.nativeElement;
    this.modalInstance = new bootstrap.Modal(modalEl);
    this.modalInstance.show();
  }

  populatFields(shipment: Shipment){
    this.viewshipment = true;
    this.createForm.patchValue({
      description: shipment.description,
      phoneNumber: shipment.phoneNumber
    });
    this.createForm.disable();
    this.shipmentDetail = shipment;
  }

  createShipment(){
    if(this.createForm.invalid){
      this.createForm.markAllAsTouched();
      return;
    }

    const createShipment: createShipmentDTO = {
      description: this.createForm.value.description,
      phoneNumber: this.createForm.value.phoneNumber,
      statusId: ShipmentStatus.Ready
    }


    this.shipmentService.createShipment(createShipment).subscribe({
      next: ()=>{
        this.closeModal();
        this.shipmentService.emitShipmentUpdated();
        Swal.fire({
          icon: 'success',
          title: 'Shipment Created',
          text: 'Your shipment has been successfully created!',
          timer: 1800,
          showConfirmButton: false
        });
      },
      error: (error) =>{
        console.error(error)
      }
    })

  }

  closeModal() {
    if (this.modalInstance) {
      
      this.modalInstance.hide();
      setTimeout(()=>{
        this.resetForm()
      },500)
      
    }
  }

  resetForm() {
    this.viewshipment = false;
    this.createForm.enable();
    this.createForm.reset();
  }
}
