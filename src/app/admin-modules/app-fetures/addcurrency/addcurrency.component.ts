import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addcurrency',
  templateUrl: './addcurrency.component.html',
  styleUrls: ['./addcurrency.component.scss']
})
export class AddcurrencyComponent implements OnInit {
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
