import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrls: ['./plat.component.css']
})
export class PlatComponent implements OnInit {
  @Input() platInput:any;
  constructor() { }

  ngOnInit() {
  }
  priceColor(price:number){
    let color:string;
    if (price>0.5 && price<5) {
      color="red";
    } else if (price>5 && price<30) {
      color="green";
    } 
    else {
      color="blue";
    }
    return color;
  } 
}
