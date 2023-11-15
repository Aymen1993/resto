import { PlatService } from './../../services/plat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plats',
  templateUrl: './plats.component.html',
  styleUrls: ['./plats.component.css']
})
export class PlatsComponent implements OnInit {
  plats: any;
  pageOfItems: Array<any>;
  constructor(private platService:PlatService) { }

  ngOnInit() {
    this.platService.getAllPlats().subscribe(
      (data)=>{
        this.plats=data.plats;
      })
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    }
}
