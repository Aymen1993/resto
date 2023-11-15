import { ChefService } from './../../services/chef.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.css']
})
export class ChefsComponent implements OnInit {
  chefs: any ;
  pageOfItems: Array<any>;
  constructor(private chefService:ChefService) { }

  ngOnInit() {
    this.chefService.getAllChefs().subscribe(
      (data)=>{
        this.chefs=data.chefs
      });
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    }
}
