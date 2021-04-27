import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  LoginForm: FormGroup;

  constructor(private formBuilder:FormBuilder, 
              private router:Router, 
              private toastr:ToastrManager, 
              private auth:AuthService) { 
    this.LoginForm = this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  async login(){
    if (this.LoginForm.valid) {
      this.auth.login(this.LoginForm.value).subscribe(data=>{
        if (data['success']) {
          this.showSuccess(data['msg']);
        } else {
          this.showError(data['msg']);
        }
      });
    } else {
      this.showError('Please Fill Email and Passowrd');
    }
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
