import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { AdminModuleService } from 'src/app/admin-module.service';
declare var $:any;

@Component({
  selector: 'app-addcurrency',
  templateUrl: './addcurrency.component.html',
  styleUrls: ['./addcurrency.component.scss']
})
export class AddcurrencyComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  CurrencyList: any;
  dataLoaded: boolean;
  addmode: boolean;
  editmode: boolean;
  deletemode: boolean;
  listmode: boolean;
  selectedData_ID: any;
  addCurrencyForm: FormGroup;
  constructor(private adminService:AdminModuleService, 
              private toastr:ToastrManager, 
              private formBuilder:FormBuilder) {
                this.addCurrencyForm = this.formBuilder.group({
                  id:[''],
                  currency_name:['',Validators.required],
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

    this.adminService.getCurrencyList().subscribe(async data=>{
      if (data['success']) {
        this.CurrencyList = await data['data'];
        this.dataLoaded = true;
      } else {
        this.CurrencyList = [];
      }
    });
  }

  getselected(event,i){
    console.log(i); 
  }

  getallselected(event){

  }


  addCurrency(){
    this.adminService.createCurrency(this.addCurrencyForm.value).subscribe(data=>{
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

  

  editCurrency(data){
    if (data != null) {
      this.addCurrencyForm.patchValue({
        id: data.id,
        currency_name: data.currency_name,
        created_at: data.created_at,
        created_by: data.created_by,
        modified_at: data.modified_at,
        modified_by: data.modified_by,
      });
      $('.addCurrency').modal('show');
      this.selectedData_ID =  data.id;
      this.addmode = false;
      this.editmode = true;
      this.deletemode = false;
      this.listmode = false;
    } else {
      this.showWarning("Please Select a Record");
    }
  }


  deleteCurrency(){
    this.dataLoaded = false;
    this.adminService.deleteCurrency(this.selectedData_ID).subscribe(data=>{
      if (data['success']) {
        this.showSuccess(data['msg']);
        this.cancel();
        this.selectedData_ID = null;
      } else {
        this.showError(data['msg']);
      }
    });
  }

  updateCurrency(){
    this.dataLoaded = false;
    this.adminService.updateCurrency(this.addCurrencyForm.value).subscribe(data=>{
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
    $('.addCurrency').modal('hide');
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
    this.adminService.getCurrencyList().subscribe(async data=>{
      if (data['success']) {
        this.CurrencyList = await data['data'];
        this.dataLoaded = true;
      } else {
        this.CurrencyList = [];
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
