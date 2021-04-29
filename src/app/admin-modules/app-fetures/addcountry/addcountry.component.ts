import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-addcountry',
  templateUrl: './addcountry.component.html',
  styleUrls: ['./addcountry.component.scss']
})
export class AddcountryComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      ordering:true,
      lengthMenu : [5, 10, 25, 50, 100]
    };
  }
  getselected(event,i){
    console.log(i); 
  }

  getallselected(event){

  }


  addCity(){

  }
}
