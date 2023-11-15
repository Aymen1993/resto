import { PlatService } from './../../services/plat.service';
import { FormGroup} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-plats',
  templateUrl: './search-plats.component.html',
  styleUrls: ['./search-plats.component.css']
})
export class SearchPlatsComponent implements OnInit {
  searchForm:FormGroup;
  plat:any={name:"",price:""};
  plats:any;
  constructor(private platService:PlatService) { }
  ngOnInit() {

  }
  search(){
    this.platService.searchPlat(this.plat).subscribe(
      (data)=>{
        this.plats=data.plats;
      });
  }
}
