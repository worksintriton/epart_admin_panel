import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { AdminModuleService } from 'src/app/admin-module.service';
declare var $:any;

@Component({
  selector: 'app-addproduct-type',
  templateUrl: './addproduct-type.component.html',
  styleUrls: ['./addproduct-type.component.scss']
})
export class AddproductTypeComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  ProductTypeList: any;
  dataLoaded: boolean;
  addmode: boolean;
  editmode: boolean;
  deletemode: boolean;
  listmode: boolean;
  selectedData_ID: any;
  addProductTypeForm: FormGroup;
  constructor(private adminService:AdminModuleService, 
              private toastr:ToastrManager, 
              private formBuilder:FormBuilder) {
                this.addProductTypeForm = this.formBuilder.group({
                  id:[''],
                  product_type_name:['',Validators.required],
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

    this.adminService.getProductTypeList().subscribe(async data=>{
      if (data['success']) {
        this.ProductTypeList = await data['data'];
        this.dataLoaded = true;
      } else {
        this.ProductTypeList = [];
      }
    });
  }

  getselected(event,i){
    console.log(i); 
  }

  getallselected(event){

  }


  addProductType(){
    this.adminService.createProductType(this.addProductTypeForm.value).subscribe(data=>{
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

  

  editProductType(data){
    if (data != null) {
      this.addProductTypeForm.patchValue({
        id: data.id,
        ProductType_name: data.ProductType_name,
        created_at: data.created_at,
        created_by: data.created_by,
        modified_at: data.modified_at,
        modified_by: data.modified_by,
      });
      $('.addProductType').modal('show');
      this.selectedData_ID =  data.id;
      this.addmode = false;
      this.editmode = true;
      this.deletemode = false;
      this.listmode = false;
    } else {
      this.showWarning("Please Select a Record");
    }
  }


  deleteProductType(){
    this.dataLoaded = false;
    this.adminService.deleteProductType(this.selectedData_ID).subscribe(data=>{
      if (data['success']) {
        this.showSuccess(data['msg']);
        this.cancel();
        this.selectedData_ID = null;
      } else {
        this.showError(data['msg']);
      }
    });
  }

  updateProductType(){
    this.dataLoaded = false;
    this.adminService.updateProductType(this.addProductTypeForm.value).subscribe(data=>{
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
    $('.addProductType').modal('hide');
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
    this.adminService.getProductTypeList().subscribe(async data=>{
      if (data['success']) {
        this.ProductTypeList = await data['data'];
        this.dataLoaded = true;
      } else {
        this.ProductTypeList = [];
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
