import { Component, OnInit } from '@angular/core';
import { AdminModuleService } from 'src/app/admin-module.service';

@Component({
  selector: 'app-addstate',
  templateUrl: './addstate.component.html',
  styleUrls: ['./addstate.component.scss']
})
export class AddstateComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  stateList: any;
  constructor(private adminService:AdminModuleService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      ordering:true,
      lengthMenu : [5, 10, 25, 50, 100]
    };
    this.adminService.getStateList().subscribe(async data=>{
      if (data['success']) {
        this.stateList = data['data'];
      } else {
        this.stateList = [];
      }
    })
  }
  getselected(event,i){
    console.log(i); 
  }

  getallselected(event){

  }


  addCity(){
  }
}
