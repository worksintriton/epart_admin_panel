import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { AdminModuleService } from 'src/app/admin-module.service';

@Component({
  selector: 'app-cms-info',
  templateUrl: './cms-info.component.html',
  styleUrls: ['./cms-info.component.scss']
})
export class CmsInfoComponent implements OnInit {
  infoForm: FormGroup;

  constructor(private formBuilder:FormBuilder, private adminService:AdminModuleService, private toastr:ToastrManager) {
    this.infoForm = this.formBuilder.group({
      id:[''],
      email:['',[Validators.required, Validators.email]],
      contact:['',Validators.compose([Validators.required, Validators.maxLength(10), Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')])],
      created_at:[''],
      modified_at:[''],
      created_by:[''],
      modified_by:['']
    })
   }

  ngOnInit(): void {
    this.adminService.getInfoCmsInfo(1).subscribe(data => {
      if (data['success']) {
        this.infoForm.patchValue({
          id:data['data'].id,
          email:data['data'].email,
          contact:data['data'].contact,
          created_at:data['data'].created_at,
          modified_at:data['data'].modified_at,
          created_by:data['data'].created_by,
          modified_by:data['data'].modified_by
        });
      } else {
        
      }
    });
  }


  updateInfo(){
    if (this.infoForm.valid) {
      this.adminService.updateInfoCms(this.infoForm.value).subscribe(data=>{
        if (data['success']) {
          this.showSuccess(data['msg']);
          this.onPageReload();
        } else {
          this.showError(data['msg']);
        }
      });
    } else {
      this.showWarning("Form not Valid");
    }
  }

  onPageReload(){
    this.adminService.getInfoCmsInfo(1).subscribe(data => {
      if (data['success']) {
        this.infoForm.patchValue({
          id:data['data'].id,
          email:data['data'].email,
          contact:data['data'].contact,
          created_at:data['data'].created_at,
          modified_at:data['data'].modified_at,
          created_by:data['data'].created_by,
          modified_by:data['data'].modified_by
        });
      } else {
        
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
