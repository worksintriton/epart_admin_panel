import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';

declare var $:any;
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  imgurl: any;
  brandname: any;
  companyname: any;
  tagline: any;
  description: any;
  email: any;
  mobile: any;
  whatsapp: any;
  facebook: any;
  linkedin: any;
  twitter: any;
  address: any;
  iframe: any;
  prp: any;
  trc: any;

  constructor(private toastr:ToastrManager, private router:Router) { }

  ngOnInit(): void {
    $("#sidebarToggle").on("click", function(e) {
      e.preventDefault();
      $("div").toggleClass("sb-sidenav-toggled");
    });
  }

  logout(){
    const tdata = {
      id:localStorage.getItem('id'),
      token:localStorage.getItem('token')
    };
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
