import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-addbuyer',
  templateUrl: './addbuyer.component.html',
  styleUrls: ['./addbuyer.component.scss']
})
export class AddbuyerComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  addmode: boolean;
  editmode: boolean;
  listmode: boolean;
  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      ordering:true,
      lengthMenu : [5, 10, 25, 50, 100],
      scrollX: true
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

  edit(){

  }

  validate(){
    $('.bd-delete-modal-sm').modal('show');
  }

  delete(){

  }

  cancel(){
    $('.bd-delete-modal-sm').modal('hide');
  }
}
