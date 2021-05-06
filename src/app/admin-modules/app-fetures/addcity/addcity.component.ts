import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var $:any;
@Component({
  selector: 'app-addcity',
  templateUrl: './addcity.component.html',
  styleUrls: ['./addcity.component.scss']
})
export class AddcityComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  addcityForm: FormGroup;
  
  addmode: boolean;
  editmode: boolean;
  listmode: boolean;
  dataLoaded: boolean;
  deletemode: boolean;
  constructor(private formBuilder:FormBuilder) { 
    this.addcityForm = this.formBuilder.group({
      id:['',Validators.required]
    })
  }

  ngOnInit(): void {

    this.dataLoaded = false;
    this.addmode = true;
    this.editmode = false;
    this.deletemode = false;
    this.listmode = true;

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      ordering:true,
      lengthMenu : [5, 10, 25, 50, 100]
    };
    this.addmode = false;
    this.editmode = false;
    this.listmode = true;
  }

  getselected(event,i){
    console.log(i); 
  }

  getallselected(event){

  }


  addCity(){

  }

  updateCity(){

  }

  deleteCity(){

  }

  cancel(){

  }
  
  edit(){

  }
  
}
