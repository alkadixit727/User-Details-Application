import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-delete-popup',
  templateUrl: './delete-popup.component.html',
  styleUrls: ['./delete-popup.component.scss']
})
export class DeletePopupComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public firstName:any, public dialogRef: MatDialogRef<DeletePopupComponent>) { }

  ngOnInit() {
  }

  cancel(){
    this.dialogRef.close({data: 'No'})
  }
  submit(){
    this.dialogRef.close({data: 'Yes'})
  }

}
