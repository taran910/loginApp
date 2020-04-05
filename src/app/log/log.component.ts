import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router,RouterModule, Routes } from "@angular/router";
@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  username:String;
  password:String;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  LoginUser(){
    if(this.username=="Admin" && this.password=="getmein")
    {
      console.log("welcome");
      this.router.navigate(['/user']);
    }
    else{
      alert("wrong credentials");
    }
  }

}
