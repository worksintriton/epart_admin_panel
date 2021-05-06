import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { AdminModuleService } from 'src/app/admin-module.service';
declare var $:any;
@Component({
  selector: 'app-addcountry',
  templateUrl: './addcountry.component.html',
  styleUrls: ['./addcountry.component.scss']
})
export class AddcountryComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  countryList: any;
  dataLoaded: boolean;
  addmode: boolean;
  editmode: boolean;
  deletemode: boolean;
  listmode: boolean;
  selectedData_ID: any;
  addCountryForm: FormGroup;
  constructor(private adminService:AdminModuleService, 
              private toastr:ToastrManager, 
              private formBuilder:FormBuilder) {
                this.addCountryForm = this.formBuilder.group({
                  id:[''],
                  country_name:['',Validators.required],
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

    this.adminService.getCountryList().subscribe(async data=>{
      if (data['success']) {
        this.countryList = await data['data'];
        this.dataLoaded = true;
      } else {
        this.countryList = [];
      }
    });
  }
  getselected(event,i){
    console.log(i); 
  }

  getallselected(event){

  }


  addCountry(){
    this.adminService.createCountry(this.addCountryForm.value).subscribe(async data=>{
      if (data['success']) {
        this.showSuccess(data['msg']);
        this.onPageReload();
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

  editCountry(data){
    if (data != null) {
      
    } else {
      this.showWarning("Please Select a Record");
    }
  }


  deleteCountry(){
    this.dataLoaded = false;
    this.adminService.deleteCountry(this.selectedData_ID).subscribe(data=>{
      if (data['success']) {
        this.showSuccess(data['msg']);
        this.cancel();
        this.selectedData_ID = null;
      } else {
        this.showError(data['msg']);
      }
    });
  }

  updateCountry(){

  }

  cancel(){
    $('#deleteModal').modal('hide');
    this.dataLoaded = false;
    this.addmode = true;
    this.editmode = false;
    this.deletemode = false;
    this.listmode = true;
    this.onPageReload();
  }

  onPageReload(){
    this.adminService.getCountryList().subscribe(async data=>{
      if (data['success']) {
        this.countryList = await data['data'];
        this.dataLoaded = true;
      } else {
        this.countryList = [];
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
