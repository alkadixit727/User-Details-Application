import { Component, OnInit } from '@angular/core';
import { MatDialog, ThemePalette } from '@angular/material';
import { UserFormComponent } from '../user-form/user-form.component';
import data from  '../../../assets/user.json';
import { DeletePopupComponent } from 'src/app/delete-popup/delete-popup.component';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
 usersData:any = data;
 color = '#00a99d';
 mode = 'determinate';
 userLength = 0;
 totalLength = 10;
 maleUser = 0;
 femaleUser = 0;
  constructor(public dialog:MatDialog) { }

  ngOnInit() {
    this.userLength = this.usersData.length;
    console.log(this.userLength);
    this.getFemaleAndMaleCount();
  } 
  getFemaleAndMaleCount(){
    this.usersData.forEach(element => {
      if(element.gender === 'Male'){
        this.maleUser++;
      }else{
        this.femaleUser++;
      }
    });
  }
   openUserForm()
  {
    var dialogRef = this.dialog.open(UserFormComponent,{width: "600px"});
    dialogRef.afterClosed().subscribe(response => {console.log(response.data);
      this.usersData.push(response.data);
      console.log(this.usersData);
      
    });
  }

  
 


  editUser(user)
  {
    let index = this.usersData.findIndex(x => x ===user);
  let dialogRef=  this.dialog.open(UserFormComponent,{ width : '600px',
      data:user,
    });
    dialogRef.afterClosed().subscribe(response => {
      console.log("Index=== ", index,response);
      
      this.usersData[index]=response.data;

    })
  }

  removeItem(element)
  {
    let dialogRef=  this.dialog.open(DeletePopupComponent,{ width : '600px',
      data:element.name,
    });
    dialogRef.afterClosed().subscribe(response => {
     
      
      if(response.data == 'Yes'){
      this.usersData.forEach((value, index)=> {
        if(value == element)
        {
          console.log("Index->", index);
          
          this.usersData.splice(index,1);
        }
  
      })
  
    }
    })
     }

}
