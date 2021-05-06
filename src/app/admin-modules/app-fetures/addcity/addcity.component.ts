import { Component, OnInit } from '@angular/core';
import { AdminModuleService } from 'src/app/admin-module.service';
declare var $:any;
@Component({
  selector: 'app-addcity',
  templateUrl: './addcity.component.html',
  styleUrls: ['./addcity.component.scss']
})
export class AddcityComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  cityList: any[];
  dataLoaded: boolean;
  addmode: boolean;
  editmode: boolean;
  deletemode: boolean;
  listmode: boolean;
  constructor(private adminService:AdminModuleService) { }

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

    this.adminService.getCityList().subscribe(async data=>{
      if (data['success']) {
        this.cityList = data['data'];
      } else {
        this.cityList = [];
      }
    });
  }

  getselected(event,i){
    console.log(i); 
  }

  getallselected(event){

  }


  addCity(){

  }

}
