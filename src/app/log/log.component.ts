import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  username:String;
  password:String;
  constructor() { }

  ngOnInit(): void {
  }
  LoginUser(){
    if(this.username=="Admin" && this.password=="getmein")
    {
      console.log("welcome");
    }
    else{
      alert("wrong credentials");
      console.log(this.username)
    }
  }

}
