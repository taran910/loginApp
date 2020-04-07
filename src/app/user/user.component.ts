import { Component, OnInit } from '@angular/core';
import { ListService } from '../user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [ListService]
})
export class UserComponent{
  li;
  dup;
  index:any;
  nam:any;
  pos:any;
  sal:any;
  off:any;
  ele:any;
  constructor(private service:ListService) {
    this.li=service.getList();
    console.log(this.li);
    this.dup=this.li;
    console.log(this.dup)
   }
  openForm(i){
    console.log(i);
    this.index=i;
    document.getElementById('popup').style.display="block";
  }
  closeForm(){
    this.li[this.index].name=this.nam;
    this.li[this.index].position=this.pos;
    this.li[this.index].salary=this.sal;
    this.li[this.index].office=this.off;
    console.log(this.index,this.nam);
    document.getElementById('popup').style.display="none";
  }
  deleteEmp(i,n){
  this.li.splice(i,1);  
  }
  Form(){
    document.getElementById('popup1').style.display="block";
   
  }
  save(){
    console.log(this.nam);
    this.ele={
      "name":this.nam,
      "position":this.pos,
      "office":this.off,
      "salary":this.sal,
      "edit":"Edit",
      "delete":"Delete"
    }
    console.log(this.ele);
    this.li.push(this.ele);
    document.getElementById('popup1').style.display="none";
  }
  }
  

