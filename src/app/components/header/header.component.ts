import { CommunicationService } from './../../shared/service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user:any={};
  isLoggedIn: any;
  role:string;
  constructor(private router: Router, private communicationService: CommunicationService) {
    this.communicationService.getData().subscribe(data => {
      this.isLoggedIn = data.connexion;
      this.role=data.role;
    });
  }

  ngOnInit() {
    this.user=JSON.parse(localStorage.getItem("user")||"{}");
    this.isLoggedIn = localStorage.getItem("connectedUserId");
  }

  logout() {
    localStorage.removeItem("connectedUserId");
    this.router.navigate([""]);
    this.isLoggedIn = false;
  }

}