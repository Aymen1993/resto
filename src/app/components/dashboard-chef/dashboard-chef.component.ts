import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { deleteObject, getObjectFromLocalStorage } from 'src/app/shared/genericFunction';

@Component({
  selector: 'app-dashboard-chef',
  templateUrl: './dashboard-chef.component.html',
  styleUrls: ['./dashboard-chef.component.css']
})
export class DashboardChefComponent implements OnInit {
  platsTab: any=[] ;
  display:any;
  constructor(private router:Router) { }

  ngOnInit() {
    this.display=false;
    let chefId=localStorage.getItem("connectedUserId");
    let platsTab=getObjectFromLocalStorage("plats");
    this.platsTab=platsTab.filter((obj:any) => obj.chefId == chefId)
  }

}
