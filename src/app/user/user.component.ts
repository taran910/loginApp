import { Component, OnInit } from '@angular/core';
import { ListService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [ListService]
})
export class UserComponent{
  emp;
  constructor(private service:ListService) {
    this.emp=service.getList();
    console.log(this.emp);
   }
  
  
}
