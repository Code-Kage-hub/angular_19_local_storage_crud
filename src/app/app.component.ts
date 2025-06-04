import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  ngOnInit(): void {
    debugger
    const localData = localStorage.getItem('angular19User');
    if(localData != null){
      this.usrList = JSON.parse(localData);
    }
  }

  isNewUser:boolean = false;
  userObj:User = new User();
  usrList:User[]=[];

  changeView(){
    this.isNewUser = !this.isNewUser;
  }

  onEdit(data:User){
    this.userObj = data;
    this.changeView();
  }

  onUpdate(){
    const record = this.usrList.find(m=>m.userId == this.userObj.userId);
    if(record!=undefined){
      record.city = this.userObj.city;
      record.fname = this.userObj.fname;
      record.lname = this.userObj.lname;
      record.isAgree =this.userObj.isAgree;
      record.state = this.userObj.state;
      record.uname =this.userObj.uname;
      record.userId = this.userObj.userId;
      record.zipcode =this.userObj.zipcode;
    }
    localStorage.setItem('angular19User',JSON.stringify(this.usrList));
    this.changeView();
  }

  onDelete(userId:number){
    const isDelete = confirm("Are you sure to delete??");
    if(isDelete){
      const index = this.usrList.findIndex(m=>m.userId == userId);
      this.usrList.splice(index,1);
      localStorage.setItem('angular19User',JSON.stringify(this.usrList));
    }
  }

  onSave(){
    debugger
    this.userObj.userId=this.usrList.length+1;
    this.usrList.push(this.userObj);
    this.userObj=new User();
    localStorage.setItem('angular19User',JSON.stringify(this.usrList));
  }
}

class User{
  userId:number;
  fname:string;
  lname:string;
  uname:string;
  city:string;
  state:string;
  zipcode:string;
  isAgree:boolean;

  constructor(){
    this.userId=0;
    this.fname="";
    this.lname="";
    this.uname="";
    this.city="";
    this.state="";
    this.zipcode="";
    this.isAgree=false;
  }
}
