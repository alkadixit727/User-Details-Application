import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as data from  '../../../assets/user.json';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  public readOnly:boolean=false;
  userForm: FormGroup;
  emailReg = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  nameReg = /^[A-Za-z]{2,10}$/;
  gender: string[] = ['Female', 'Male'];
 
  
  constructor( private formBuilder: FormBuilder, public dialogRef: MatDialogRef<UserFormComponent>, @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {

    this.userForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      
      email: [null, [Validators.required, Validators.pattern(this.emailReg)]],
      gender: [null],
      address: [null, [Validators.required]],
      dateofBirth: [null, [Validators.required]]
    });
    console.log("uSER FORM  UPDATED DATA:",this.data);
    if(this.data)
    {
    this.initializeFormValue();
    }
    
  }

  submit() {
    if (!this.userForm.valid) {
      return;
    }
    console.log(this.userForm.value);
    this.dialogRef.close({data: this.userForm.value})
  }

  
  reset()
  {
     this.userForm.reset();
  }

  close()
  {
    this.dialogRef.close();
  }

  initializeFormValue()
  {
    this.userForm.setValue({ 
      name: this.data.name,
      gender: this.data.gender,
      email: this.data.email,
      address: this.data.address,
      dateofBirth: this.data.dateofBirth
    })
    console.log(this.userForm);
    
  }
}
