import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TransportService } from '../../services/transport.service';

@Component({
  selector: 'app-cw-transport-request',
  templateUrl: './cw-transport-request.component.html',
  styleUrls: ['./cw-transport-request.component.scss'],
})
export class CwTransportRequestComponent implements OnInit {

 
  submitted = false;
  mobileMode = false;
  minDateValue:any;
  maxDateValue:any;
  caseWorker:any;
  firstName: any;
  lastName:any; 
  appointmentDate:any;
  time:any;
 
  reason:any;
  address:any;
  city:any;
  state:any;
  zip:any;
  coordinatorField:any;
  nursingNotifiedField:any
  byField:any;
  dateApproved: any;
  date:any;

  constructor(private fb: FormBuilder,private service: TransportService) {
    this.minDateValue = new Date(new Date().getTime());
    this.maxDateValue = new Date(new Date().getTime());
  }


  transportRequestForm!: FormGroup;

  states = [
    { name: 'California', code: 'CA' },
    { name: 'Texas', code: 'TX' },
  ];

  @HostListener('window:resize')
  onWindowResize() {
    this.mobileMode = window.innerWidth < 768;
  }

  ngOnInit(): void {

    this.onWindowResize();

    this.service.getTransportRequestFormData().subscribe((data) => {
      this.caseWorker = data;
      this.firstName = this.caseWorker.firstName;
      this.lastName = this.caseWorker.lastName;
      this.appointmentDate = this.caseWorker.appointmentDate;
      this.time = this.caseWorker.time;
      this.reason = this.caseWorker.reason;
      this.coordinatorField = this.caseWorker.coordinatorField;
      this.nursingNotifiedField = this.caseWorker.nursingNotifiedField;
      this.address = this.caseWorker.address;
      this.city = this.caseWorker.city;
      this.state = this.caseWorker.state;
      this.zip = this.caseWorker.zip;
      this.dateApproved = this.caseWorker.dateApproved;
     this.byField = this.caseWorker.byField;
      this.date = this.caseWorker.dateApproved;
     
      this.buildForm();
      console.log(this.transportRequestForm.value);
     
      

    });
    
  }

  buildForm() {
    this.transportRequestForm = this.fb.group({
      firstName: [this.firstName, Validators.required],
      lastName: [this.lastName, Validators.required],
      appointmentDate: [this.appointmentDate, Validators.required],
      time: [this.time, Validators.required],
      reason: [this.reason, Validators.required],
      address: [this.address, Validators.required],
      city: [this.city, Validators.required],
      state: [this.state, Validators.required],
      zip: [this.zip, Validators.required],
      coordinator: ['', Validators.required],
      approvedDate: [this.dateApproved, Validators.required],
      nursingNotified: ['', Validators.required],
      by: ['', Validators.required],
      date: [this.date, Validators.required],
    });
    
  }

  get by(){
    return this.transportRequestForm.get('by');
  }

  get coordinator(){
    return this.transportRequestForm.get('coordinator');
  }
  get nursingNotified(){
    return this.transportRequestForm.get('nursingNotified');
  }

  // get getControl(){
  //   return this.transportRequestForm.controls;
  // }

  // get registerFormControl() {
  //   return this.transportRequestForm.controls;
  // }

  
  

  onSubmit() {
    this.submitted = true;
    if (this.transportRequestForm.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.transportRequestForm.value);
    console.log(this.transportRequestForm.value);
    
  }
}
  reset() {
    this.transportRequestForm.controls['coordinator'].reset(), 
    this.transportRequestForm.controls['approvedDate'].reset(),
    this.transportRequestForm.controls['nursingNotified'].reset(),
    this.transportRequestForm.controls['by'].reset(),
    this.transportRequestForm.controls['date'].reset()
  }
}
