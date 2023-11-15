import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { deleteObject } from 'src/app/shared/genericFunction';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  users: any;
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.getAllUsers();
  }
  deleteUser(id:number){
    this.userService.deleteUser(id).subscribe(
      (response)=>{
        console.log("user is deleted :",response);
        this.getAllUsers();
      });
  }
  getAllUsers(){
    this.userService.getAllUsers().subscribe(
      (data)=>{
        this.users=data.users;
      });
  }
}
