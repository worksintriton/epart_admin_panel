import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { AdminModuleService } from 'src/app/admin-module.service';
declare var $:any;

@Component({
  selector: 'app-addpayout-schedule',
  templateUrl: './addpayout-schedule.component.html',
  styleUrls: ['./addpayout-schedule.component.scss']
})
export class AddpayoutScheduleComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  PayoutList: any;
  dataLoaded: boolean;
  addmode: boolean;
  editmode: boolean;
  deletemode: boolean;
  listmode: boolean;
  selectedData_ID: any;
  addPayoutForm: FormGroup;
  constructor(private adminService:AdminModuleService, 
              private toastr:ToastrManager, 
              private formBuilder:FormBuilder) {
                this.addPayoutForm = this.formBuilder.group({
                  id:[''],
                  subscription_name:['',Validators.required],
                  created_at:['',Validators.required],
                  created_by:['',Validators.required],
                  modified_at:['',Validators.required],
                  modified_by:['',Validators.required],
                });
               }

  ngOnInit(): void {

    this.dataLoaded = false;
    this.addmode = true;
    this.editmode = false;
    this.deletemode = false;
    this.listmode = true;

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
      ordering:true,
      lengthMenu : [5, 10, 25, 50, 100]
    };

    this.adminService.getPayoutList().subscribe(async data=>{
      if (data['success']) {
        this.PayoutList = await data['data'];
        this.dataLoaded = true;
      } else {
        this.PayoutList = [];
      }
    });
  }

  getselected(event,i){
    console.log(i); 
  }

  getallselected(event){

  }


  addPayout(){
    this.adminService.createPayout(this.addPayoutForm.value).subscribe(data=>{
      if (data['success']) {
        this.showSuccess(data['msg']);
        this.cancel();
      } else {
        this.showError(data['msg']);
      }
    })
  }


  validate(id){
    if (id != null) {
      $('#deleteModal').modal('show');
      this.selectedData_ID =  id;
      this.addmode = false;
      this.editmode = false;
      this.deletemode = true;
      this.listmode = false;
    } else {
      this.showWarning("Please Select a Record");
    }
  }

  

  editPayout(data){
    if (data != null) {
      this.addPayoutForm.patchValue({
        id: data.id,
        Payout_name: data.Payout_name,
        created_at: data.created_at,
        created_by: data.created_by,
        modified_at: data.modified_at,
        modified_by: data.modified_by,
      });
      $('.addPayout').modal('show');
      this.selectedData_ID =  data.id;
      this.addmode = false;
      this.editmode = true;
      this.deletemode = false;
      this.listmode = false;
    } else {
      this.showWarning("Please Select a Record");
    }
  }


  deletePayout(){
    this.dataLoaded = false;
    this.adminService.deletePayout(this.selectedData_ID).subscribe(data=>{
      if (data['success']) {
        this.showSuccess(data['msg']);
        this.cancel();
        this.selectedData_ID = null;
      } else {
        this.showError(data['msg']);
      }
    });
  }

  updatePayout(){
    this.dataLoaded = false;
    this.adminService.updatePayout(this.addPayoutForm.value).subscribe(data=>{
      if (data['success']) {
        this.showSuccess(data['msg']);
        this.cancel();
        this.selectedData_ID = null;
      } else {
        this.showSuccess(data['msg']);
      }
    });
  }

  cancel(){
    $('#deleteModal').modal('hide');
    $('.addPayout').modal('hide');
    this.dataLoaded = false;
    this.addmode = true;
    this.editmode = false;
    this.deletemode = false;
    this.listmode = true;
    this.onPageReload();
  }

  onPageReload(){
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
      ordering:true,
      lengthMenu : [5, 10, 25, 50, 100]
    };
    this.adminService.getPayoutList().subscribe(async data=>{
      if (data['success']) {
        this.PayoutList = await data['data'];
        this.dataLoaded = true;
      } else {
        this.PayoutList = [];
      }
    });
  }


  showSuccess(msg) {
    this.toastr.successToastr(msg);
  }

  showError(msg) {
    this.toastr.errorToastr(msg);
  }

  showWarning(msg) {
    this.toastr.warningToastr(msg);
  }
}
